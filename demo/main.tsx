import ReactDOM from "react-dom/client";

import "maplibre-theme/legacy.scoped.css";
import "maplibre-theme/modern.scoped.css";
import "maplibre-theme/classic.scoped.css";

import App from "./App.tsx";

// import "../../main.css";
/*
 <React.StrictMode>
    <App />
  </React.StrictMode>
*/

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
