import {
  Modal,
  ModalTrigger,
  ModalContent,
} from "pentatrion-design/components/modal";
import { Textarea } from "pentatrion-design/components/textarea";
import style from "./ConfigModal.module.css";

import { extractIconSet } from "../lib/css";
import { useAppSelector } from "../store";
import { selectThemeCssVars, selectThemeID } from "../store/themeSlice";
import { generateCssCode, generateJsCode, generateJsonCode } from "../lib/io";
import { Tab, Tabs } from "pentatrion-design/components/tabs/Tabs";
import { useState } from "react";
import { Button } from "pentatrion-design/components/button";
import clsx from "clsx";

export default function ConfigPreview() {
  const [isOpen, setIsOpen] = useState(false);

  const themeID = useAppSelector(selectThemeID);
  const themeCssVars = useAppSelector(selectThemeCssVars);

  const iconSet = extractIconSet(themeCssVars);

  const [id, setId] = useState<string | number>("css");

  const tabs: Tab[] = [
    {
      id: "css",
      title: "CSS Export",
      content: (
        <div className="flex-1 flex flex-col">
          <p>Add this lines into your js code</p>
          <Textarea
            value={generateJsCode(iconSet, themeID)}
            readOnly
            className="h-16"
          />
          <p>Add this rules into your css code</p>
          <Textarea
            value={generateCssCode(themeCssVars)}
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
            value={generateJsonCode(themeID, themeCssVars)}
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
          value={id}
          onChange={setId}
          fullWidth={true}
          className={clsx("rounded-2xl", style.tabs)}
        >
          <Button
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
