import clsx from "clsx";

import { ResizeArea } from "pentatrion-design/components/resize-area";
import { Button, LinkButton } from "pentatrion-design/components/button";

import { Dispatch, ReactNode, SetStateAction } from "react";
import { Scroll } from "pentatrion-design/components/scroll";
import {
  Modal,
  ModalTrigger,
  ModalContent,
} from "pentatrion-design/components/modal";
import ConfigPreview from "./ConfigPreview";

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
        "fixed left-0 top-0 z-30 bottom-0 flex-col max-w-full w-64 flex-none  bg-gray-0  shadow dark:shadow-dark md:relative md:flex md:bg-transparent md:shadow-none md:dark:shadow-none md:flex-[0_0_var(--sidebar-menu-width)] border-r border-r-gray-2",
        !showNavBar ? "hidden" : "flex"
      )}
    >
      <ResizeArea name="menu" position="right" className="hidden md:block" />
      <header className="h-8 flex items-center m-2 justify-between">
        <a
          href="https://maplibre.org"
          className="block w-full [&:hover_.libre]:text-[#285DAA]"
        >
          <h1 className="flex items-center justify-between">
            <span className=" text-2xl app-logo">
              Map
              <span className="libre transition-colors text-[#82b4fe]">
                Libre
              </span>
            </span>
            <span className="text-gray-6 hidden md:block">
              <i className="fe-sliders"></i>
              Theme customizer
            </span>
          </h1>
        </a>
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
      <div className="flex items-center justify-end p-4">
        <Modal>
          <ModalTrigger>Generate config</ModalTrigger>
          <ModalContent>
            <ConfigPreview />
          </ModalContent>
        </Modal>
      </div>
      <div className="flex items-center justify-center h-12">
        <LinkButton
          icon
          color="gray"
          variant="text"
          size="large"
          href="https://github.com/lhapaipai/maplibre-theme"
        >
          <i className="fe-github-circled"></i>
        </LinkButton>
      </div>
    </div>
  );
}
