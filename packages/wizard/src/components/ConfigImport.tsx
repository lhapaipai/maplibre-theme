import { Button } from "pentatrion-design/button";
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalFooter,
} from "pentatrion-design/modal";
import { addToast } from "pentatrion-design/toast";
import { FormEvent, useState } from "react";
import { parseStringAsJsonConfig } from "../lib/io";
import { configChanged } from "../store/configSlice";
import { useAppDispatch } from "../store";
import style from "./ConfigModal.module.css";
import { Textarea } from "pentatrion-design/textarea";

export default function ConfigImport() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const formElement = e.target as HTMLFormElement;
    e.preventDefault();
    const strConfig = new FormData(formElement).get("config");

    const config = parseStringAsJsonConfig(strConfig);
    if (!config) {
      addToast(
        "Unable to parse configuration, verify your content is a valid JSON content.",
        {
          color: "red",
        }
      );
      return;
    }

    dispatch(configChanged(config));

    setIsOpen(false);
  }
  return (
    <Modal open={isOpen} onOpen={setIsOpen}>
      <ModalTrigger>Import config</ModalTrigger>
      <ModalContent className={style.modal}>
        <form
          action="#"
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col"
        >
          <header className="flex items-center px-2 pt-2">
            <h4 className="font-semibold leading-6">
              <div className="ml-2">Import configuration as JSON content</div>
            </h4>
          </header>
          <Textarea className="m-2 flex-1" name="config"></Textarea>
          <ModalFooter>
            <div className="flex justify-between">
              <Button
                type="reset"
                variant="text"
                color="gray"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" color="yellow">
                Accept
              </Button>
            </div>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
