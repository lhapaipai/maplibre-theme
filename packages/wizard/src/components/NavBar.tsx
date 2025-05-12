import clsx from "clsx";

import { ResizeArea } from "pentatrion-design/resize-area";
import { Button, HrefButton } from "pentatrion-design/button";

import { Dispatch, ReactNode, SetStateAction } from "react";
import { Scroll } from "pentatrion-design/scroll";
import ConfigPreview from "./ConfigPreview";
import ConfigImport from "./ConfigImport";
import { version } from "~/../package.json";

interface Props {
  showNavBar: boolean;
  setShowNavBar: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}
export default function NavBar({ showNavBar, setShowNavBar, children }: Props) {
  return (
    <div
      id="menu-col"
      className={clsx(
        "fixed left-0 top-0 z-30 bottom-0 flex-col max-w-full w-80 flex-none  bg-gray-0  shadow dark:shadow-dark md:relative md:flex md:bg-transparent md:shadow-none md:dark:shadow-none md:flex-[0_0_var(--sidebar-menu-width)] border-r border-r-gray-2",
        !showNavBar ? "hidden" : "flex"
      )}
    >
      <ResizeArea name="menu" position="right" className="hidden md:block" />
      <header className="h-8 flex items-center m-2 justify-between">
        <h1 className="flex items-center justify-between relative w-full">
          <a
            href="https://maplibre.org"
            className=" [&:hover_.libre]:text-[#285DAA]"
          >
            <span className=" text-2xl app-logo">
              Map
              <span className="libre transition-colors text-[#82b4fe]">
                Libre
              </span>
            </span>
          </a>

          <span className="text-gray-6 hidden md:flex flex-col">
            <span>
              <i className="fe-sliders"></i>
              Theme customizer
            </span>
            <span className="text-xs absolute top-3/4 right-0">{version}</span>
          </span>
        </h1>
        <div className="md:hidden">
          <Button
            icon
            onClick={() => setShowNavBar(false)}
            color="gray"
            variant="text"
          >
            <i className="fe-cancel"></i>
          </Button>
        </div>
      </header>
      <Scroll className="flex-1 overflow-y-auto">{children}</Scroll>
      <div className="flex items-center justify-between m-2">
        <ConfigImport />
        <ConfigPreview />
      </div>
      <div className="flex items-center justify-center h-12">
        <HrefButton
          icon
          color="gray"
          variant="text"
          size="large"
          href="https://github.com/lhapaipai/maplibre-theme"
        >
          <i className="fe-github-circled"></i>
        </HrefButton>
      </div>
    </div>
  );
}
