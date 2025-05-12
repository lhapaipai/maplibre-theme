import { Button } from "pentatrion-design/button";
import { Color } from "./Color";
import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
} from "pentatrion-design/modal";

import clsx from "clsx";
import { colorByGroups } from "~/lib/color";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ColorPicker({ value, onChange }: Props) {
  const [tempValue, setTempValue] = useState<null | string>(null);

  function handleSelectAndSubmit(selectedValue: string) {
    onChange(selectedValue);
    setTempValue(null);
  }

  function handleSubmit() {
    tempValue && onChange(tempValue);
    setTempValue(null);
  }
  return (
    <>
      <Color onClick={() => setTempValue(value)} value={value}>
        {value}
      </Color>
      <Modal
        open={tempValue !== null}
        /* There is not Modal trigger, onOpen is called only by
         * FloatingOverlay to close the modal */
        onOpen={(modalKeepOpen) => !modalKeepOpen && setTempValue(null)}
      >
        <ModalContent className="w-full max-w-[650px] max-h-[90vh] my-4 overflow-auto">
          <ModalHeader>Choose your color</ModalHeader>
          <ModalDescription>
            <div className="grid gap-1 grid-cols-repeat-fill-color text-center text-sm">
              {colorByGroups.map(({ name, colors }) => (
                <div key={name}>
                  <div>{name}</div>
                  <div className="grid shadow">
                    {colors.map(([colorNumber, colorCode]) => (
                      <button
                        key={colorNumber}
                        className={clsx(
                          "cursor-pointer",
                          parseInt(colorNumber) > 600
                            ? "text-white"
                            : "text-black",
                          "hover:scale-150 hover:shadow hover:rounded active:scale-125 hover:z-20",
                          tempValue === colorCode &&
                            "outline outline-2 z-10 rounded outline-yellow-5"
                        )}
                        style={{ backgroundColor: colorCode }}
                        onClick={() => handleSelectAndSubmit(colorCode)}
                      >
                        {colorNumber}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ModalDescription>
          <ModalFooter className="mt-2">
            <div className="flex justify-between">
              <Button
                type="reset"
                variant="text"
                color="gray"
                onClick={() => setTempValue(null)}
              >
                Cancel
              </Button>
              <Button type="submit" color="yellow" onClick={handleSubmit}>
                Accept
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
