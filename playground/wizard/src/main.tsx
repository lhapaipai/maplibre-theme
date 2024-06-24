import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.tsx";
import store from "./store/index.ts";

import "./index.css";

import "maplibre-theme/icons.default.css";
import "maplibre-theme/icons.lucide.css";
import "maplibre-theme/classic.scoped.css";
import "maplibre-theme/modern.scoped.css";
import "maplibre-theme/legacy.scoped.css";
import { NotificationConsumer } from "pentatrion-design/redux";

const strict = false;

ReactDOM.createRoot(document.getElementById("root")!).render(
  strict ? (
    <React.StrictMode>
      <Provider store={store}>
        <NotificationConsumer>
          <App />
        </NotificationConsumer>
      </Provider>
    </React.StrictMode>
  ) : (
    <Provider store={store}>
      <NotificationConsumer>
        <App />
      </NotificationConsumer>
    </Provider>
  )
);
