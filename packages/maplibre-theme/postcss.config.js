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
  const scoped = ctx.env === "scoped";
  const compat = ctx.env === "compat";
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
          const contexts = ctx.env?.split("-") ?? [];

          let updatedSelector = selector;

          if (contexts.includes("scoped")) {
            updatedSelector = scope(updatedSelector, filePath);
          }

          if (contexts.includes("compat")) {
            updatedSelector = mapboxCompat(updatedSelector);
          }

          return updatedSelector;
        },
      }),

      autoprefixer(),
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
