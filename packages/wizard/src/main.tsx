import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";

import App from "./App.tsx";
import store from "./store/index.ts";

import "maplibre-theme/icons.default.css";
import "maplibre-theme/icons.lucide.css";

import "maplibre-theme/extra/classic.scoped.compat.css";
import "maplibre-theme/extra/modern.scoped.compat.css";
import "maplibre-theme/extra/legacy.scoped.compat.css";

import "maplibre-theme/plugins/mapbox-gl-draw.css";
import { Toasts } from "pentatrion-design/toast";

const strict = true;

ReactDOM.createRoot(document.getElementById("root")!).render(
  strict ? (
    <React.StrictMode>
      <Provider store={store}>
        <App />
        <Toasts />
      </Provider>
    </React.StrictMode>
  ) : (
    <Provider store={store}>
      <App />
      <Toasts />
    </Provider>
  )
);
