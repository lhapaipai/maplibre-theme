import { basename } from "node:path";

function basenameWithoutExts(filePath) {
  const fileName = basename(filePath);
  const firstDot = fileName.indexOf(".");
  return fileName.substring(0, firstDot === "-1" ? fileName : firstDot);
}

/**
 * the basename of the entrypoint :
 * entrypoint: packages/maplibre-theme/src/themes/modern/modern.css
 * basename  : modern
 * is the name of the theme
 * @param {string} selector
 * @param {string} filePath
 */
export function scope(selector, filePath) {
  const entryName = basenameWithoutExts(filePath);
  const themeClassName = `.maplibregl-theme-${entryName}`;

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
}

/**
 * @param {string} selector
 */
export function mapboxCompat(selector) {
  return selector
    .replaceAll(
      /\.maplibregl-ctrl(?!-)\b/g,
      ":is(.maplibregl-ctrl, .mapboxgl-ctrl)"
    )
    .replaceAll(
      /\.maplibregl-ctrl-group(?!-)\b/g,
      ":is(.maplibregl-ctrl-group, .mapboxgl-ctrl-group)"
    );
}
