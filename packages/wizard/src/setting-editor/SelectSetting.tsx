import { Select } from "pentatrion-design/select";

export default function SelectSetting({
  name,
  value,
  options: _options,
  onChange,
}: SettingComponentProps) {
  const options = _options as SelectOptions;

  return (
    <div className="p8n-setting">
      <div>{name}</div>
      <Select
        variant="normal"
        options={options}
        placement="bottom-end"
        floatingMinWidth={160}
        value={value}
        onChange={(o) => {
          onChange(name, o.target.value as string);
        }}
      ></Select>
    </div>
  );
}
