import { expect, test, describe } from "vitest";
import { mapboxCompat, scope } from "./util";

describe("postcss.util", () => {
  test.each([
    // unchanged if themeClassName is present
    [
      ".hello .maplibregl-theme-modern .world",
      ".hello .maplibregl-theme-modern .world",
    ],

    // if exact match :root
    [":root", ".maplibregl-theme-modern"],

    // if exact match .dark
    [".dark", ".dark .maplibregl-theme-modern"],

    // if startsWith .maplibregl-map
    [
      ".maplibregl-map .other",
      ".maplibregl-theme-modern.maplibregl-map .other",
    ],

    // other cases simply prefix
    [".hello", ".maplibregl-theme-modern .hello"],
  ])("scope %s", (selector, expectedScopedSelector) => {
    expect(scope(selector, "modern.css")).toBe(expectedScopedSelector);
  });

  test.each([
    [".maplibregl-ctrl", ":is(.maplibregl-ctrl, .mapboxgl-ctrl)"],

    [
      ".before.maplibregl-ctrl.after",
      ".before:is(.maplibregl-ctrl, .mapboxgl-ctrl).after",
    ],

    // if after the classname there is not a word boundary don't do anything
    [".maplibregl-ctrlnext", ".maplibregl-ctrlnext"],

    // exception if the word boundary is "-" don't do anything
    [".maplibregl-ctrl-other", ".maplibregl-ctrl-other"],
  ])("mapboxCompat %s", (selector, expectedScopedSelector) => {
    expect(mapboxCompat(selector)).toBe(expectedScopedSelector);
  });
});
