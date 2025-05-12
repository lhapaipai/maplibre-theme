import React from "react";
import ColorSetting from "./ColorSetting";
import FontSetting from "./FontSetting";
import NumberSetting from "./NumberSetting";
import SelectSetting from "./SelectSetting";

export const settingEditors: {
  [key in SettingType]: (props: SettingComponentProps) => React.JSX.Element;
} = {
  color: ColorSetting,
  font: FontSetting,
  number: NumberSetting,
  select: SelectSetting,
};
