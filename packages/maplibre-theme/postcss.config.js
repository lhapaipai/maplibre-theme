import autoprefixer from "autoprefixer";
import cssnanoPlugin from "cssnano";
import prefixer from "postcss-prefix-selector";
import postcssInlineSvg from "postcss-inline-svg";
import postcssImport from "postcss-import";
import postcssInlineBase64 from "postcss-inline-base64";
import { dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
const projectDir = dirname(fileURLToPath(import.meta.url));

const config = (ctx) => {
  const scoped = ctx.env === "scoped";
  return {
    plugins: [
      postcssImport(),
      postcssInlineBase64({
        baseDir: projectDir,
      }),
      postcssInlineSvg(),

      scoped &&
        prefixer({
          prefix: "",
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          transform(prefix, selector, _prefixedSelector, filePath, _rule) {
            const entryName = basename(filePath, ".css");
            const themeClassName = `.maplibregl-theme-${entryName}`;

            // if (
            //   selector.startsWith(
            //     ".maplibregl-ctrl button.maplibregl-ctrl-geolocate"
            //   )
            // ) {
            //   debugger;
            // }

            if (entryName === "core" || selector.includes(themeClassName)) {
              return selector;
            }
            /* todo difference with ":root,\n .dark" ? */
            if (selector === ":root") {
              return themeClassName;
            }
            if (selector === ".dark") {
              return `.dark ${themeClassName}`;
            }

            if (selector.startsWith(".maplibregl-map")) {
              return `${themeClassName}${selector}`;
            }

            return `${themeClassName} ${selector}`;
          },
        }),

      autoprefixer(),
      // cssnanoPlugin({
      //   preset: [
      //     "default",
      //     {
      //       svgo: {
      //         plugins: [
      //           {
      //             name: "preset-default",
      //             params: {
      //               overrides: {
      //                 removeViewBox: false,
      //               },
      //             },
      //           },
      //         ],
      //       },
      //     },
      //   ],
      // }),
    ],
  };
};

export default config;
