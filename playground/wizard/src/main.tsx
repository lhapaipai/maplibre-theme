import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "maplibre-theme/classic.scoped.css";
import "maplibre-theme/modern.scoped.css";
import "maplibre-theme/legacy.scoped.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
