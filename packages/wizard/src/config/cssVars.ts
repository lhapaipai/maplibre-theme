import { classicOptions, modernOptions } from "../lib/shadow";

export const cssDefaultValuesByTheme: {
  [key in Theme]: CssVars;
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
        '12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif',
      "--ml-c-bg-1": "#ffffff",
      "--ml-c-bg-2": "#f0f0f0",
      "--ml-c-bg-3": "#d7d7d7",
      "--ml-c-icon-1": "#333333",
      "--ml-c-icon-2": "#000000",
      "--ml-c-active": "#1da1f2",
      "--ml-c-error": "#e54e33",
      "--ml-c-outline": "#1da1f2",
      "--ml-o-disabled": "0.25",
      "--ml-shadow-ctrl": "0 0 0 2px rgb(0 0 0 / 10%)",
      "--ml-shadow-popup": "0 1px 2px rgb(0 0 0 / 10%)",
      "--ml-c-link-1": "#333333",
      "--ml-c-link-2": "#000000",
      "--ml-c-logo-1": "#ffffff",
      "--ml-c-logo-2": "#d7d7d7",
      "--ml-c-geoloc": "#1da1f2",
    },
    dark: {
      "--ml-c-bg-1": "#111725",
      "--ml-c-bg-2": "#414853",
      "--ml-c-bg-3": "#32363f",
      "--ml-c-icon-1": "#cbd5e1",
      "--ml-c-icon-2": "#ffffff",
      "--ml-c-link-1": "#cbd5e1",
      "--ml-c-link-2": "#ffffff",
      "--ml-shadow-ctrl": "0 0 0 2px rgb(0 0 0 / 35%)",
      "--ml-shadow-popup": "0 0 0 2px rgb(0 0 0 / 35%)",
      "--ml-c-logo-1": "#111725",
      "--ml-c-logo-2": "#32363f",
    },
  },
  modern: {
    light: {
      "--ml-ctrl-border-radius": "1rem",
      "--ml-font":
        '16px/24px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      "--ml-font-attribution": "inherit",
      "--ml-c-bg-1": "#ffffff",
      "--ml-c-bg-2": "#f0f0f0",
      "--ml-c-bg-3": "#d7d7d7",
      "--ml-c-icon-1": "#333333",
      "--ml-c-icon-2": "#000000",
      "--ml-c-active": "#1da1f2",
      "--ml-c-error": "#e54e33",
      "--ml-c-outline": "#dba726",
      "--ml-o-disabled": "0.25",
      "--ml-shadow":
        "0 1px 3px 0 rgb(0 0 0 / 0.15), 0 1px 2px -1px rgb(0 0 0 / 0.15)",
      "--ml-shadow-active":
        "0 10px 15px -3px rgb(0 0 0 / 0.15), 0 4px 6px -2px rgb(0 0 0 / 0.15)",
      "--ml-c-link-1": "#333333",
      "--ml-c-link-2": "#000000",
      "--ml-c-logo-1": "#ffffff",
      "--ml-c-logo-2": "#d7d7d7",
      "--ml-c-geoloc": "#1da1f2",
    },
    dark: {
      "--ml-c-bg-1": "#111725",
      "--ml-c-bg-2": "#414853",
      "--ml-c-bg-3": "#32363f",
      "--ml-c-icon-1": "#cbd5e1",
      "--ml-c-icon-2": "#ffffff",
      "--ml-shadow":
        "0 1px 3px 0 rgb(0 0 0 / 0.15), 0 1px 2px -1px rgb(0 0 0 / 0.15)",
      "--ml-c-link-1": "#cbd5e1",
      "--ml-c-link-2": "#ffffff",
      "--ml-c-logo-1": "#111725",
      "--ml-c-logo-2": "#32363f",
    },
  },
};

export const propertiesByTheme: {
  [key in Theme]: Property[];
} = {
  modern: [
    {
      type: "number",
      name: "--ml-ctrl-border-radius",
      options: { unit: "rem", min: 0, max: 1, step: 0.125 },
      description:
        "define the round corner of your controls (buttons container and attributions) and popups.",
    },
    // { type: "font", name: "--ml-font" },
    // { type: "font", name: "--ml-font-attribution" },

    {
      type: "color",
      name: "--ml-c-bg-1",
      description:
        "define the background color of your controls, popups and geolocation dot border (bg color of your ctrl scale and boxzoom is calculated from this color with an opacity of 65%)",
    },
    {
      type: "color",
      name: "--ml-c-bg-2",
      description:
        "define the background color of your controls when hovered (and user location dot border color)",
    },
    {
      type: "color",
      name: "--ml-c-bg-3",
      description:
        "define the background color of your controls when active (and border color between control buttons)",
    },

    {
      type: "color",
      name: "--ml-c-icon-1",
      description:
        "default state color of your ctrl icons, popup close button and scale ctrl border",
    },
    {
      type: "color",
      name: "--ml-c-icon-2",
      description: "color of your icons when hovered",
    },
    {
      type: "color",
      name: "--ml-c-active",
      description:
        "color of your control icons when they are activated (geolocation, terrain)",
    },
    {
      type: "color",
      name: "--ml-c-error",
      description:
        "define the color of the geolocation button icon error state (and inactive)",
    },
    {
      type: "color",
      name: "--ml-c-outline",
      description:
        "outline color of the control buttons when they have the focus",
    },
    {
      type: "number",
      name: "--ml-o-disabled",
      description: "opacity of your control when disabled",
      options: {
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    {
      type: "select",
      name: "--ml-shadow",
      options: modernOptions,
      description: "shadow of your controls and popups",
    },
    {
      type: "select",
      name: "--ml-shadow-active",
      options: modernOptions,
      description: "shadow of your control buttons when active state",
    },
    {
      type: "color",
      name: "--ml-c-link-1",
      description: "color of the anchors for the attribution links",
    },
    {
      type: "color",
      name: "--ml-c-link-2",
      description: "color of the hovered anchors for the attribution links",
    },
    {
      type: "color",
      name: "--ml-c-logo-1",
      description: "color of the text of the MapLibre logo",
    },
    {
      type: "color",
      name: "--ml-c-logo-2",
      description: "color of the text of the MapLibre logo when hovered",
    },

    {
      type: "color",
      name: "--ml-c-geoloc",
      description: "color of your geolocation marker dot and accuracy circle",
    },
  ],
  classic: [
    {
      type: "number",
      name: "--ml-ctrl-border-radius",
      options: { unit: "px", min: 0, max: 20, step: 1 },
    },

    // { type: "font", name: "--ml-font" },
    // { type: "font", name: "--ml-font-attribution" },
    { type: "color", name: "--ml-c-bg-1" },
    { type: "color", name: "--ml-c-bg-2" },
    { type: "color", name: "--ml-c-bg-3" },
    { type: "color", name: "--ml-c-icon-1" },
    { type: "color", name: "--ml-c-icon-2" },
    { type: "color", name: "--ml-c-active" },
    { type: "color", name: "--ml-c-error" },
    {
      type: "color",
      name: "--ml-c-outline",
      description:
        "outline color of the control buttons when they have the focus",
    },
    {
      type: "number",
      name: "--ml-o-disabled",
      description: "opacity of your control when disabled",
      options: {
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    {
      type: "select",
      name: "--ml-shadow-ctrl",
      options: classicOptions,
    },
    {
      type: "select",
      name: "--ml-shadow-popup",
      options: classicOptions,
    },
    { type: "color", name: "--ml-c-link-1" },
    { type: "color", name: "--ml-c-link-2" },
    { type: "color", name: "--ml-c-logo-1" },
    {
      type: "color",
      name: "--ml-c-logo-2",
      description: "color of the text of the MapLibre logo when hovered",
    },
    { type: "color", name: "--ml-c-geoloc" },
  ],
  legacy: [],
};
