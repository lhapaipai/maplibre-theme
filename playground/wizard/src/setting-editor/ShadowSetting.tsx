import { Select } from "pentatrion-design/components/select";

const shadowOptionsByCategory = {
  modern: [
    { value: "0 0 #0000", label: "shadow-none" },
    { value: "0 1px 2px 0 rgb(0 0 0 / 0.05)", label: "shadow-sm" },
    {
      value: "0 1px 3px 0 rgb(0 0 0 / 0.15), 0 1px 2px -1px rgb(0 0 0 / 0.15)",
      label: "shadow",
    },
    {
      value: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      label: "shadow-md",
    },
    {
      value:
        "0 10px 15px -3px rgb(0 0 0 / 0.15), 0 4px 6px -2px rgb(0 0 0 / 0.15)",
      label: "shadow-lg",
    },
    {
      value:
        "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      label: "shadow-xl",
    },
    { value: "0 25px 50px -12px rgb(0 0 0 / 0.25)", label: "shadow-2xl" },
    { value: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", label: "shadow-inner" },
  ],
  classic: [
    { value: "0 0 #0000", label: "shadow-none" },
    { value: "0 0 0 1px rgb(0 0 0 / 10%)", label: "outline 1px 10%" },
    { value: "0 0 0 2px rgb(0 0 0 / 10%)", label: "outline 2px 10%" },
    { value: "0 0 0 3px rgb(0 0 0 / 10%)", label: "outline 3px 10%" },
    { value: "0 0 0 4px rgb(0 0 0 / 10%)", label: "outline 4px 10%" },
    { value: "0 0 0 5px rgb(0 0 0 / 10%)", label: "outline 5px 10%" },
    { value: "0 0 0 6px rgb(0 0 0 / 10%)", label: "outline 6px 10%" },
    { value: "0 1px 2px rgb(0 0 0 / 10%)", label: "light blur 1px 10%" },
    { value: "0 1px 2px rgb(0 0 0 / 10%)", label: "light blur 2px 10%" },
    { value: "0 1px 2px rgb(0 0 0 / 10%)", label: "light blur 3px 10%" },
    { value: "0 1px 2px rgb(0 0 0 / 10%)", label: "light blur 4px 10%" },
    { value: "0 1px 2px rgb(0 0 0 / 10%)", label: "light blur 5px 10%" },
    { value: "0 1px 2px rgb(0 0 0 / 10%)", label: "light blur 6px 10%" },
  ],
  ring: [
    { value: "0 0 0px 1px rgb(var(--ml-c-outline) / 1)", label: "1px" },
    { value: "0 0 0px 2px rgb(var(--ml-c-outline) / 1)", label: "2px" },
    { value: "0 0 0px 3px rgb(var(--ml-c-outline) / 1)", label: "3px" },
    { value: "0 0 2px 2px rgb(29 161 242)", label: "blue with blur" },
  ],
};

export default function ShadowSetting({
  name,
  value,
  options,
  onChange,
}: SettingComponentProps) {
  const category =
    (options?.category as "modern" | "classic" | "ring") || "modern";
  const shadowOptions = shadowOptionsByCategory[category];
  return (
    <div className="p8n-setting">
      <div>{name}</div>
      <Select
        variant="ghost"
        options={shadowOptions}
        value={value}
        onChange={(o) => {
          onChange(name, o.target.value as string);
        }}
      ></Select>
    </div>
  );
}
