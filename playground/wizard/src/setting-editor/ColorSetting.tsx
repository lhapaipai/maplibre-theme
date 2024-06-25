import ColorPicker from "../components/ColorPicker";
import { colorNameByCode, hexToRgb, rgbToHex } from "../lib/color";

export default function ColorSetting({
  name,
  value,
  onChange,
}: SettingComponentProps) {
  const rgb = value.split(" ").map((v) => parseInt(v)) as [
    number,
    number,
    number,
  ];
  const hex = rgbToHex(rgb);

  return (
    <div className="p8n-setting">
      <div>{name}</div>
      {value && (
        <div className="text-gray-6 text-sm">
          {colorNameByCode[hex]?.join(" ") || `rgb(${value})`}
        </div>
      )}
      <ColorPicker
        value={hex}
        onChange={(newValue) => {
          const updatedValue = hexToRgb(newValue).join(" ");
          if (updatedValue !== value && typeof updatedValue === "string") {
            onChange(name, updatedValue);
          }
        }}
      />
    </div>
  );
}
