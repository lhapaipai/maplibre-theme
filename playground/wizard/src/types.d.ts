type ThemeID = "modern" | "classic" | "legacy";

type SettingType = "color" | "font" | "length" | "shadow";
type Property = {
  type: SettingType;
  name: string;
  options?: {
    [key: string]: string;
  };
};

type SettingComponentProps = {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  options?: {
    [key: string]: string;
  };
};

type CssValues = {
  light: {
    [key: string]: string;
  };
  dark: {
    [key: string]: string;
  };
};
