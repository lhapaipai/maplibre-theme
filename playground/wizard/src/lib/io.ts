import { cssInJsToCss } from "./css";

export function generateJsCode(iconSet: IconSet, theme: Theme) {
  return `import "maplibre-theme/icons.${iconSet}.css";
import "maplibre-theme/${theme}.css";`;
}

export function generateCssCode(cssVars: CssVars) {
  return cssInJsToCss({
    ".maplibregl-map": cssVars?.light,
    ".dark .maplibregl-map": cssVars?.dark,
  });
}

export function generateJsonCode(theme: Theme, cssVars: CssVars): string {
  return JSON.stringify(
    {
      theme,
      cssVars,
    },
    undefined,
    2
  );
}

export function parseStringAsJsonConfig(
  data: FormDataEntryValue | null
): JsonConfig | null {
  if (!data || typeof data !== "string") {
    return null;
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const jsonData = JSON.parse(data) as any;
    if (!jsonData.theme || !jsonData.cssVars) {
      return null;
    }

    const { theme, cssVars } = jsonData;

    return {
      theme,
      cssVars,
    };
  } catch (err) {
    return null;
  }
}
