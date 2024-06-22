import ColorSetting from "./ColorSetting";
import FontSetting from "./FontSetting";
import NumberSetting from "./NumberSetting";
import ShadowSetting from "./ShadowSetting";

export const settingEditors: {
  [key in SettingType]: (props: SettingComponentProps) => JSX.Element;
} = {
  color: ColorSetting,
  font: FontSetting,
  number: NumberSetting,
  shadow: ShadowSetting,
};
