export function mergeCssValues(
  cssValues: CssValues | null,
  isDarkMode: boolean
): {
  [key: string]: string;
} {
  console.log("mergeCssValues");
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
