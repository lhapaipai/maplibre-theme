import { useControl } from "maplibre-react-components";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

export default function RMapboxDraw() {
  useControl({
    factory: () => new MapboxDraw(),
  });
  return null;
}
