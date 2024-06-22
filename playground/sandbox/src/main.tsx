import ReactDOM from "react-dom/client";

import "maplibre-theme/icons.default.css";
import "maplibre-theme/legacy.scoped.css";
import "maplibre-theme/modern.scoped.css";
import "maplibre-theme/classic.scoped.css";

import App from "./App.tsx";
import React from "react";

const strict = false;

ReactDOM.createRoot(document.getElementById("root")!).render(
  strict ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  )
);
