import autoprefixer from "autoprefixer";
import cssnanoPlugin from "cssnano";
import prefixer from "postcss-prefix-selector";
import postcssInlineSvg from "postcss-inline-svg";
import postcssImport from "postcss-import";
import { scope, mapboxCompat } from "./postcss/util.js";

const config = (ctx) => {
  const contexts = ctx.env?.split(",") ?? [];

  const isScoped = contexts.includes("scoped");
  const isCompat = contexts.includes("compat");
  const withMinification = contexts.includes("minify");

  return {
    plugins: [
      postcssImport(),
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
          preset: ["default"],
        }),
    ],
  };
};

export default config;
