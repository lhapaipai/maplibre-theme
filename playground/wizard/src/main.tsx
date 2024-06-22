import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "maplibre-theme/icons.default.css";
import "maplibre-theme/icons.lucide.css";
import "maplibre-theme/classic.scoped.css";
import "maplibre-theme/modern.scoped.css";
import "maplibre-theme/legacy.scoped.css";

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
