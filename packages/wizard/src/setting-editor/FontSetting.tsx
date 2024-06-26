export default function FontSetting({ name, value }: SettingComponentProps) {
  return (
    <div className="p8n-setting">
      <div>{name}</div>
      <div>{value.substring(0, 10)}</div>
    </div>
  );
}
