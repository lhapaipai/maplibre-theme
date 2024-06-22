export function mergeCssValues(
  cssValues: CssValues | null,
  isDarkMode: boolean
): {
  [key: string]: string;
} {
  if (!cssValues) {
    return {};
  }
  if (isDarkMode) {
    return {
      ...cssValues["light"],
      ...cssValues["dark"],
    };
  }
  return cssValues["light"];
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
