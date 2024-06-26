import {
  Modal,
  ModalTrigger,
  ModalContent,
} from "pentatrion-design/components/modal";
import { Textarea } from "pentatrion-design/components/textarea";
import style from "./ConfigModal.module.css";

import { useAppSelector } from "../store";
import { selectConfig } from "../store/configSlice";
import { generateCssCode, generateJsCode, generateJsonCode } from "../lib/io";
import { Tab, Tabs } from "pentatrion-design/components/tabs/Tabs";
import { useState } from "react";
import { Button } from "pentatrion-design/components/button";
import clsx from "clsx";

export default function ConfigPreview() {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, icons, cssVars } = useAppSelector(selectConfig);

  const [tabId, setTabId] = useState<string | number>("css");

  const tabs: Tab[] = [
    {
      id: "css",
      title: "CSS Export",
      content: (
        <div className="flex-1 flex flex-col">
          <p>Add this lines into your js code</p>
          <Textarea
            value={generateJsCode(icons, theme)}
            readOnly
            className="h-16"
          />
          <p>Add this rules into your css code</p>
          <Textarea
            value={generateCssCode(icons, cssVars)}
            readOnly
            className="flex-1"
          />
        </div>
      ),
    },
    {
      id: "json",
      title: "JSON Export",
      content: (
        <div className="p-4 flex-1 flex flex-col">
          <Textarea
            value={generateJsonCode(theme, icons, cssVars)}
            readOnly
            className="flex-1"
          />
        </div>
      ),
    },
  ];

  return (
    <Modal open={isOpen} onOpen={setIsOpen}>
      <ModalTrigger>Generate config</ModalTrigger>
      <ModalContent className={style.modal}>
        <Tabs
          tabs={tabs}
          value={tabId}
          onChange={setTabId}
          fullWidth={true}
          className={clsx("rounded-2xl", style.tabs)}
        >
          <Button
            className="ml-2"
            icon
            variant="text"
            color="gray"
            onClick={() => setIsOpen(false)}
          >
            <i className="fe-cancel"></i>
          </Button>
        </Tabs>
      </ModalContent>
    </Modal>
  );
}
