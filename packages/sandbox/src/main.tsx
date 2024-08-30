import ReactDOM from "react-dom/client";

import "maplibre-theme/icons.default.css";
import "maplibre-theme/extra/legacy.scoped.compat.css";
import "maplibre-theme/extra/modern.scoped.compat.css";
import "maplibre-theme/extra/classic.scoped.compat.css";

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
