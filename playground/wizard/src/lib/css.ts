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
