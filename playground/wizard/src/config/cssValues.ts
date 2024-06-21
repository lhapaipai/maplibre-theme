export const cssDefaultValuesByTheme: {
  [key in ThemeID]: CssValues;
} = {
  legacy: {
    light: {},
    dark: {},
  },
  classic: {
    light: {
      "--ml-ctrl-border-radius": "4px",
      "--ml-font": '12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif',
      "--ml-font-attribution":
        '12px/20px "Helvetica Neue", Arial, Helvetica,\n    sans-serif',
      "--ml-c-neutral": "0 0 0",
      "--ml-c-error": "229 78 51",
      "--ml-c-bg": "255 255 255",
      "--ml-c-primary-0": "255 255 255",
      "--ml-c-primary-1": "240 240 240",
      "--ml-c-primary-2": "215 215 215",
      "--ml-c-text": "51 51 51",
      "--ml-c-icon": "51 51 51",
      "--ml-c-disabled": "170 170 170",
      "--ml-shadow-ctrl": "0 0 0 2px rgb(0 0 0 / 10%)",
      "--ml-shadow-popup": "0 1px 2px rgb(0 0 0 / 10%)",
      "--ml-c-active": "29 161 242",
      "--ml-c-geoloc": "29 161 242",
      "--ml-outline": "0 0 2px 2px rgb(29 161 242)",
    },
    dark: {
      "--ml-c-bg": "17 23 37",
      "--ml-c-neutral": "255 255 255",
      "--ml-c-text": "203 213 225",
      "--ml-c-icon": "255 255 255",
      "--ml-c-primary-0": "17 23 37",
      "--ml-c-primary-1": "65 72 83",
      "--ml-c-primary-2": "50 54 63",
      "--ml-shadow-ctrl": "0 0 0 2px rgb(0 0 0 / 35%)",
      "--ml-shadow-popup": "0 0 0 2px rgb(0 0 0 / 35%)",
    },
  },
  modern: {
    light: {
      "--ml-ctrl-border-radius": "1rem",
      "--ml-font":
        '16px/24px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      "--ml-font-attribution": "inherit",
      "--ml-c-error": "229 78 51",
      "--ml-c-bg": "255 255 255",
      "--ml-c-neutral": "0 0 0",
      "--ml-c-text": "51 51 51",
      "--ml-c-icon": "51 51 51",
      "--ml-c-primary-0": "255 255 255",
      "--ml-c-primary-1": "240 240 240",
      "--ml-c-primary-2": "215 215 215",
      "--ml-c-disabled": "180 180 180",
      "--ml-c-outline": "219 167 38",
      "--ml-c-active": "29 161 242",
      "--ml-c-geoloc": "29 161 242",
      "--ml-shadow":
        "0 1px 3px 0 rgb(0 0 0 / 0.15), 0 1px 2px -1px rgb(0 0 0 / 0.15)",
      "--ml-shadow-active":
        "0 10px 15px -3px rgb(0 0 0 / 0.15), 0 4px 6px -2px rgb(0 0 0 / 0.15)",
      "--ml-ring-shadow": "0 0 0px 2px rgb(var(--ml-c-outline) / 1)",
    },
    dark: {
      "--ml-c-bg": "17 23 37",
      "--ml-c-neutral": "255 255 255",
      "--ml-c-text": "203 213 225",
      "--ml-c-icon": "255 255 255",
      "--ml-c-primary-0": "17 23 37",
      "--ml-c-primary-1": "65 72 83",
      "--ml-c-primary-2": "50 54 63",
      "--ml-shadow":
        "0 1px 3px 0 rgb(0 0 0 / 0.15), 0 1px 2px -1px rgb(0 0 0 / 0.15)",
    },
  },
};

export const propertiesByTheme: {
  [key in ThemeID]: Property[];
} = {
  modern: [
    {
      type: "length",
      name: "--ml-ctrl-border-radius",
      options: { unit: "rem" },
    },
    // { type: "font", name: "--ml-font" },
    // { type: "font", name: "--ml-font-attribution" },
    { type: "color", name: "--ml-c-error" },
    { type: "color", name: "--ml-c-bg" },
    { type: "color", name: "--ml-c-neutral" },
    { type: "color", name: "--ml-c-text" },
    { type: "color", name: "--ml-c-icon" },
    { type: "color", name: "--ml-c-primary-0" },
    { type: "color", name: "--ml-c-primary-1" },
    { type: "color", name: "--ml-c-primary-2" },
    { type: "color", name: "--ml-c-disabled" },
    { type: "color", name: "--ml-c-outline" },
    { type: "color", name: "--ml-c-active" },
    { type: "color", name: "--ml-c-geoloc" },
    { type: "shadow", name: "--ml-shadow", options: { category: "modern" } },
    {
      type: "shadow",
      name: "--ml-shadow-active",
      options: { category: "modern" },
    },
    { type: "shadow", name: "--ml-ring-shadow", options: { category: "ring" } },
  ],
  classic: [
    { type: "font", name: "--ml-ctrl-border-radius", options: { unit: "px" } },
    // { type: "font", name: "--ml-font" },
    // { type: "font", name: "--ml-font-attribution" },
    { type: "color", name: "--ml-c-neutral" },
    { type: "color", name: "--ml-c-error" },
    { type: "color", name: "--ml-c-bg" },
    { type: "color", name: "--ml-c-primary-0" },
    { type: "color", name: "--ml-c-primary-1" },
    { type: "color", name: "--ml-c-primary-2" },
    { type: "color", name: "--ml-c-text" },
    { type: "color", name: "--ml-c-icon" },
    { type: "color", name: "--ml-c-disabled" },
    {
      type: "shadow",
      name: "--ml-shadow-ctrl",
      options: { category: "classic" },
    },
    {
      type: "shadow",
      name: "--ml-shadow-popup",
      options: { category: "classic" },
    },
    { type: "color", name: "--ml-c-active" },
    { type: "color", name: "--ml-c-geoloc" },
    { type: "color", name: "--ml-outline" },
  ],
  legacy: [],
};
