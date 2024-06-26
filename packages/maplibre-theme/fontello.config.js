import { defineConfig } from "pentatrion-fontello-cli";

export default defineConfig([
  {
    base: "src/icons/core",
    fontFamily: "maplibregl-icons-core",
    cssFile: "index.css",
  },
  {
    base: "src/icons/default",
    fontFamily: "maplibregl-icons-default",
    cssFile: "icons.default.css",
  },
  {
    base: "src/icons/lucide",
    fontFamily: "maplibregl-icons-lucide",
    cssFile: "icons.lucide.css",
  },
  {
    base: "src/icons/mapbox-gl-draw",
    fontFamily: "maplibregl-icons-mapbox-gl-draw",
    cssFile: "index.css",
  },
]);
