import { Range } from "pentatrion-design";

const formatters = {
  px: (val: number) => `${val}px`,
  rem: (val: number) => `${val}rem`,
};

export default function LengthSetting({
  name,
  value,
  options,
  onChange,
}: SettingComponentProps) {
  const floatVal = parseFloat(value);
  const unit = (options?.unit as "px" | "rem") || "rem";
  const formatter = formatters[unit];

  return (
    <div className="p8n-setting">
      <div>{name}</div>
      <Range
        showValue={false}
        formatter={formatter}
        min={0}
        max={unit === "rem" ? 1 : 20}
        step={unit === "rem" ? 0.125 : 1}
        value={floatVal}
        onChange={(e) => {
          const updatedValue = formatter(e.target.valueAsNumber);
          if (updatedValue !== value && typeof updatedValue === "string") {
            onChange(name, updatedValue);
          }
        }}
      />
    </div>
  );
}
