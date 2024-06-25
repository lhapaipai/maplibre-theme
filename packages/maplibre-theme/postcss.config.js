import autoprefixer from "autoprefixer";
import cssnanoPlugin from "cssnano";
import prefixer from "postcss-prefix-selector";
import postcssInlineSvg from "postcss-inline-svg";
import postcssImport from "postcss-import";
import postcssInlineBase64 from "postcss-inline-base64";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { scope, mapboxCompat } from "./postcss/util.js";
const projectDir = dirname(fileURLToPath(import.meta.url));

const config = (ctx) => {
  const contexts = ctx.env?.split(",") ?? [];

  const isScoped = contexts.includes("scoped");
  const isCompat = contexts.includes("compat");
  const withMinification = contexts.includes("minify");

  return {
    plugins: [
      postcssImport(),
      postcssInlineBase64({
        baseDir: projectDir,
      }),
      postcssInlineSvg(),

      prefixer({
        prefix: "",
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        transform(prefix, selector, _prefixedSelector, filePath, _rule) {
          let updatedSelector = selector;

          if (isScoped) {
            updatedSelector = scope(updatedSelector, filePath);
          }

          if (isCompat) {
            updatedSelector = mapboxCompat(updatedSelector);
          }

          return updatedSelector;
        },
      }),

      autoprefixer(),

      withMinification &&
        cssnanoPlugin({
          preset: [
            "default",
            {
              svgo: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          ],
        }),
    ],
  };
};

export default config;
