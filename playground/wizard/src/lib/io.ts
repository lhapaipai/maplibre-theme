import { cssInJsToCss } from "./css";

export function generateJsCode(iconSet: IconSet, themeID: ThemeID) {
  return `import "maplibre-theme/icons.${iconSet}.css";
import "maplibre-theme/${themeID}.css";`;
}

export function generateCssCode(themeCssVars: CssVars) {
  return cssInJsToCss({
    ".maplibregl-map": themeCssVars?.light,
    ".dark .maplibregl-map": themeCssVars?.dark,
  });
}

export function generateJsonCode(
  themeID: ThemeID,
  themeCssVars: CssVars
): string {
  return JSON.stringify(
    {
      theme: {
        id: themeID,
        cssVars: themeCssVars,
      },
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
    if (!jsonData.theme || !jsonData.theme.id || !jsonData.theme.cssVars) {
      return null;
    }

    const { id, cssVars } = jsonData.theme;

    return {
      theme: {
        id,
        cssVars,
      },
    };
  } catch (err) {
    return null;
  }
}
