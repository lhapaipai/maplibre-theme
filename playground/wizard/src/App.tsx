import "./App.css";

import { Button } from "pentatrion-design/components/button";

import { useEffect, useMemo, useState } from "react";
import MapApp from "./components/MapApp";
import NavBar from "./components/NavBar";
import NavBarContent from "./components/NavBarContent";
import { cssDefaultValuesByTheme } from "./config/cssValues";
import { useDarkMode } from "./hooks/useDarkMode";
import { mergeCssValues } from "./lib/css";

function App() {
  const { isDarkMode, setDarkMode } = useDarkMode();
  const [showNavBar, setShowNavBar] = useState(false);
  const [theme, setTheme] = useState<ThemeID>("modern");
  const [themeCssValues, setThemeCssValues] = useState<null | CssValues>(null);

  useEffect(() => {
    console.log("reinit default css values");
    setThemeCssValues(cssDefaultValuesByTheme[theme]);
  }, [theme]);

  const mergedCssValues = useMemo(() => {
    console.log("mergeCssValues", isDarkMode);
    return mergeCssValues(themeCssValues, isDarkMode);
  }, [themeCssValues, isDarkMode]);

  return (
    <div id="app" className="flex">
      <div className="absolute left-2 top-2 z-10 md:hidden">
        <Button
          icon
          onClick={() => setShowNavBar((s) => !s)}
          color="gray"
          variant="light"
          className="[&_svg.lucide]:pr-0"
        >
          <i className="fe-menu"></i>
        </Button>
      </div>
      <NavBar showNavBar={showNavBar} setShowNavBar={setShowNavBar}>
        <NavBarContent
          isDarkMode={isDarkMode}
          setDarkMode={setDarkMode}
          theme={theme}
          setTheme={setTheme}
          themeCssValues={themeCssValues}
          setThemeCssValues={setThemeCssValues}
        />
      </NavBar>

      <div id="content" className="flex-1 relative">
        <MapApp theme={theme} style={mergedCssValues} />
      </div>
    </div>
  );
}

export default App;
