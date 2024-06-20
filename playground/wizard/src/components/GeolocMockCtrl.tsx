import { createPortal } from "react-dom";
import { useRControl } from "maplibre-react-components";

export default function GeolocMockCtrl() {
  const { container } = useRControl({
    position: "bottom-left",
  });

  return createPortal(
    <>
      <button
        className="maplibregl-ctrl-geolocate ring-1"
        type="button"
        title="Find my location"
        aria-label="Find my location"
      >
        <span className="maplibregl-ctrl-icon" aria-hidden="true"></span>
      </button>
      <button
        className="maplibregl-ctrl-geolocate maplibregl-ctrl-geolocate-active"
        type="button"
        title="Find my location"
        aria-label="Find my location"
      >
        <span className="maplibregl-ctrl-icon" aria-hidden="true"></span>
      </button>
      <button
        className="maplibregl-ctrl-geolocate maplibregl-ctrl-geolocate-active-error"
        type="button"
        title="Find my location"
        aria-label="Find my location"
      >
        <span className="maplibregl-ctrl-icon" aria-hidden="true"></span>
      </button>
      <button
        className="maplibregl-ctrl-geolocate maplibregl-ctrl-geolocate-background"
        type="button"
        title="Find my location"
        aria-label="Find my location"
      >
        <span className="maplibregl-ctrl-icon" aria-hidden="true"></span>
      </button>
      <button
        className="maplibregl-ctrl-geolocate maplibregl-ctrl-geolocate-background-error"
        type="button"
        title="Find my location"
        aria-label="Find my location"
      >
        <span className="maplibregl-ctrl-icon" aria-hidden="true"></span>
      </button>
      <button
        className="maplibregl-ctrl-geolocate maplibregl-ctrl-geolocate-waiting"
        type="button"
        title="Find my location"
        aria-label="Find my location"
      >
        <span className="maplibregl-ctrl-icon" aria-hidden="true"></span>
      </button>
      <button
        className="maplibregl-ctrl-geolocate"
        type="button"
        title="Find my location"
        aria-label="Find my location"
        disabled
      >
        <span className="maplibregl-ctrl-icon" aria-hidden="true"></span>
      </button>
    </>,
    container
  );
}
