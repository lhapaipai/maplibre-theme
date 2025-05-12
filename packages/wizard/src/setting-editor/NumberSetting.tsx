import { Range } from "pentatrion-design/input";

const formatters = {
  px: (val: number) => `${val}px`,
  rem: (val: number) => `${val}rem`,
  default: (val: number) => val.toString(),
};

export default function NumberSetting({
  name,
  value,
  options: _options,
  onChange,
}: SettingComponentProps) {
  const options = _options as NumberOptions;
  const { unit = "default", min = 0, max = 1, step = 0.1 } = options;

  const floatVal = parseFloat(value);
  const formatter = formatters[unit];

  return (
    <div className="p8n-setting">
      <div>{name}</div>
      <Range
        showValue={false}
        formatter={formatter}
        min={min}
        max={max}
        step={step}
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
