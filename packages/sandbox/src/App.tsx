import { Map } from "maplibre-gl";
import "./App.css";
import "maplibre-react-components/style.css";
import { lightStyle, darkStyle } from "./style.ts";

new URL(window.location.toString()).searchParams
  .get("classes")
  ?.split("|")
  .forEach((className) => {
    document.body.classList.add(className);
  });

import {
  RAttributionControl,
  RFullscreenControl,
  RGeolocateControl,
  RLogoControl,
  RMap,
  RMarker,
  RNavigationControl,
  RPopup,
  RScaleControl,
  RSource,
  RTerrainControl,
} from "maplibre-react-components";
import { useRef } from "react";
import clsx from "clsx";
import GeolocMockCtrl from "./GeolocMockCtrl";
import CustomControl from "./CustomCtrl";

const marignier = { lng: 6.498, lat: 46.089 };
const montreal = { lng: -73.6, lat: 45.4 };
const durban = { lng: 31, lat: -29 };
const bichkek = { lng: 74, lat: 42 };
const paquesIsland = { lng: -109.3, lat: -27.1 };

const rasterDemTiles = [
  "https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",
];

const accuracyCircleStyle = {
  transform: "translate(-50%, -50%)",
  width: "200px",
  height: "200px",
};

const dotStyle = {
  transform: "translate(-50%, -50%)",
};

function CustomMap({
  className,
  theme,
  scheme = "light",
}: {
  className?: string;
  theme?: "legacy" | "classic" | "modern";
  scheme?: "light" | "dark";
}) {
  const mapRef = useRef<Map>(null);

  return (
    <div className={clsx("map-container", scheme)}>
      <RMap
        ref={mapRef}
        initialAttributionControl={false}
        className={clsx(className, `shadow-md maplibregl-theme-${theme}`)}
        mapStyle={scheme === "light" ? lightStyle : darkStyle}
        onClick={(e) => console.log(e.lngLat)}
      >
        <RSource
          type="raster-dem"
          id="terrarium"
          tiles={rasterDemTiles}
          encoding="terrarium"
          tileSize={256}
        />
        <RMarker
          longitude={durban.lng}
          latitude={durban.lat}
          initialAnchor="center"
        >
          <div
            className="maplibregl-user-location-accuracy-circle maplibregl-marker maplibregl-marker-anchor-center"
            style={accuracyCircleStyle}
          ></div>
          <div
            className="maplibregl-user-location-dot maplibregl-marker maplibregl-marker-anchor-center"
            style={dotStyle}
          ></div>
        </RMarker>
        <RMarker
          longitude={paquesIsland.lng}
          latitude={paquesIsland.lat}
          initialAnchor="center"
        >
          <div
            className="maplibregl-user-location-accuracy-circle maplibregl-marker maplibregl-marker-anchor-center"
            style={accuracyCircleStyle}
          ></div>
          <div
            className="maplibregl-user-location-dot maplibregl-user-location-dot-stale maplibregl-marker maplibregl-marker-anchor-center"
            style={dotStyle}
          ></div>
        </RMarker>
        <RMarker longitude={montreal.lng} latitude={montreal.lat} />
        <RPopup longitude={marignier.lng} latitude={marignier.lat}>
          Hello world !
        </RPopup>
        <RPopup
          longitude={bichkek.lng}
          latitude={bichkek.lat}
          initialFocusAfterOpen={false}
        >
          Hello world !
          <button className="maplibregl-popup-close-button">×</button>
        </RPopup>
        <RFullscreenControl />
        <RGeolocateControl
          showAccuracyCircle={true}
          showUserLocation={true}
          trackUserLocation={true}
        />
        <RNavigationControl />
        <RTerrainControl source="terrarium" />
        <RLogoControl compact={false} />
        <RLogoControl compact={true} />
        <RScaleControl />
        <RAttributionControl compact={false} />
        <RAttributionControl compact={true} />
        <GeolocMockCtrl />
        <CustomControl />
        <div className="ml-title">
          {theme} {scheme}
        </div>
      </RMap>
    </div>
  );
}

function App() {
  return (
    <>
      <div id="app">
        <CustomMap theme="classic" scheme="light" />
        <CustomMap theme="classic" scheme="dark" />

        <CustomMap theme="modern" scheme="light" />
        <CustomMap theme="modern" scheme="dark" />

        <CustomMap theme="legacy" scheme="light" />
      </div>
    </>
  );
}

export default App;
