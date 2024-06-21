import ColorSetting from "./ColorSetting";
import FontSetting from "./FontSetting";
import LengthSetting from "./LengthSetting";
import ShadowSetting from "./ShadowSetting";

export const settingEditors: {
  [key in SettingType]: (props: SettingComponentProps) => JSX.Element;
} = {
  color: ColorSetting,
  font: FontSetting,
  length: LengthSetting,
  shadow: ShadowSetting,
};
