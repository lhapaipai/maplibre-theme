import "./App.css";

import { ResizeArea } from "pentatrion-design/components/resize-area";
import { Button } from "pentatrion-design/components/button";
import clsx from "clsx";

import { useState } from "react";
import MapApp from "./components/MapApp";
import NavBar from "./components/NavBar";

function App() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [theme, setTheme] = useState<ThemeID>("modern");

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

      <div
        id="menu-col"
        className={clsx(
          "fixed left-0 top-0 z-30 h-screen flex-col max-w-full w-64 flex-none overflow-y-auto overflow-x-hidden bg-gray-0 px-4 py-2 shadow dark:shadow-dark md:relative md:flex md:bg-transparent md:shadow-none md:dark:shadow-none md:flex-[0_0_var(--sidebar-menu-width)] border-r border-r-gray-2",
          !showNavBar ? "hidden" : "flex"
        )}
      >
        <ResizeArea name="menu" position="right" className="hidden md:block" />
        <div className="absolute right-2 top-2 md:hidden">
          <Button
            icon
            onClick={() => setShowNavBar(false)}
            color="gray"
            variant="text"
          >
            <i className="fe-cancel"></i>
          </Button>
        </div>
        <NavBar theme={theme} setTheme={setTheme} />
      </div>
      <div id="content" className="flex-1 relative">
        <MapApp theme={theme} />
      </div>
    </div>
  );
}

export default App;
