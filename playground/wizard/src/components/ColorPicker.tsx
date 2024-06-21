import { ComponentProps } from "react";

interface Props extends ComponentProps<"input"> {}

export default function ColorPicker({
  title = "Choose your color",
  ...rest
}: Props) {
  return (
    <input
      type="color"
      className="w-12 h-8 p-1 bg-gray-0 outline outline-1 outline-offset-[-1px] outline-gray-2 hover:outline-gray-3 focus-full:outline-2 focus-full:outline-yellow-4 cursor-pointer rounded-md"
      title={title}
      {...rest}
    />
  );
}
