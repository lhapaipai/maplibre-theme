import ColorPicker from "../components/ColorPicker";
import { hexToRgb, rgbToHex } from "../lib/color";

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
      <ColorPicker
        value={hex}
        onChange={(e) => {
          const updatedValue = hexToRgb(e.target.value).join(" ");
          if (updatedValue !== value && typeof updatedValue === "string") {
            onChange(name, updatedValue);
          }
        }}
      />
    </div>
  );
}
