export function mergeCssVars(
  cssVars: CssVars | null,
  mode: Mode,
  icons: IconSet
): {
  [key: string]: string;
} {
  if (!cssVars) {
    return {};
  }
  if (mode === "dark") {
    return {
      ...cssVars["light"],
      ...cssVars["dark"],
      "--ml-font-icons": `maplibregl-icons-${icons}`,
    };
  }
  return {
    ...cssVars["light"],
    "--ml-font-icons": `maplibregl-icons-${icons}`,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cssInJsToCss(json: any) {
  const selectors = Object.keys(json);
  return selectors
    .map((selector) => {
      const definition = json[selector];
      const rules = Object.keys(definition);
      const result = rules
        .map((rule) => {
          return `  ${rule}: ${definition[rule]}`;
        })
        .join(";\n");
      return `${selector} {\n${result};\n}\n`;
    })
    .join("\n");
}

export function extractIconSet(cssVars: CssVars): IconSet {
  return (
    (cssVars?.light["--ml-font-icons"]?.substring(17) as IconSet) || "default"
  );
}
