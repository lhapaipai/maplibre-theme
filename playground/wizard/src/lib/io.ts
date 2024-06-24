import { cssInJsToCss } from "./css";

export function generateJsCode(iconSet: IconSet, theme: Theme) {
  return `import "maplibre-theme/icons.${iconSet}.css";
import "maplibre-theme/${theme}.css";`;
}

export function generateCssCode(icons: IconSet, cssVars: CssVars) {
  return cssInJsToCss({
    ".maplibregl-map": {
      ...cssVars?.light,
      "--ml-font-icons": `maplibregl-icons-${icons}`,
    },
    ".dark .maplibregl-map": cssVars?.dark,
  });
}

export function generateJsonCode(
  theme: Theme,
  icons: IconSet,
  cssVars: CssVars
): string {
  return JSON.stringify(
    {
      theme,
      icons,
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
    if (!jsonData.theme || !jsonData.icons || !jsonData.cssVars) {
      return null;
    }

    const { theme, icons, cssVars } = jsonData;

    return {
      theme,
      icons,
      cssVars,
    };
  } catch (err) {
    return null;
  }
}
