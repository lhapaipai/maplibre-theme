import ColorPicker from "../components/ColorPicker";
import { colorNameByCode } from "../lib/color";

export default function ColorSetting({
  name,
  value,
  onChange,
}: SettingComponentProps) {
  return (
    <div className="p8n-setting">
      <div>{name}</div>
      {value && (
        <div className="text-gray-6 text-sm">
          {colorNameByCode[value]?.join(" ") || value}
        </div>
      )}
      <ColorPicker
        value={value}
        onChange={(newValue) => {
          if (newValue !== value && typeof newValue === "string") {
            onChange(name, newValue);
          }
        }}
      />
    </div>
  );
}
