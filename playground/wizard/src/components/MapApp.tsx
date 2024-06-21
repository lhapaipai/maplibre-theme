import { CSSProperties, useMemo } from "react";
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
import GeolocMockCtrl from "./GeolocMockCtrl";
const initialMapStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

interface Props {
  theme: ThemeID;
  style: CSSProperties;
}

const accuracyCircleStyle = {
  transform: "translate(-50%, -50%)",
  width: "200px",
  height: "200px",
};

const dotStyle = {
  transform: "translate(-50%, -50%)",
};

const marignier = { lng: 6.498, lat: 46.089 };
const montreal = { lng: -73.6, lat: 45.4 };
const durban = { lng: 31, lat: -29 };
const bichkek = { lng: 74, lat: 42 };
const rasterDemTiles = [
  "https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",
];

export default function MapApp({ theme, style }: Props) {
  const mapStyle = useMemo(() => {
    // console.log("call to useMemo for mapStyle", style);
    return {
      ...initialMapStyle,
      ...style,
    };
  }, [style]);

  return (
    <RMap
      style={mapStyle}
      className={`maplibregl-theme-${theme}`}
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
      <RMarker longitude={montreal.lng} latitude={montreal.lat} />

      <RPopup longitude={marignier.lng} latitude={marignier.lat}>
        Hello world !
      </RPopup>
      <RPopup longitude={bichkek.lng} latitude={bichkek.lat}>
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
    </RMap>
  );
}
