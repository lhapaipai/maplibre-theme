import { Button } from "pentatrion-design/components/button";

import { useState } from "react";
import MapApp from "./components/map/MapApp";
import NavBar from "./components/NavBar";
import NavBarContent from "./components/NavBarContent";

function App() {
  const [showNavBar, setShowNavBar] = useState(false);

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
        <NavBarContent />
      </NavBar>
      <div id="content" className="flex-1 relative">
        <MapApp />
      </div>
    </div>
  );
}

export default App;
