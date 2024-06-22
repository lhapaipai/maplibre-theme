type ThemeID = "modern" | "classic" | "legacy";

type SettingType = "color" | "font" | "number" | "select";

type NumberOptions = {
  min?: number;
  max?: number;
  step?: number;
  unit?: "px" | "rem" | "default";
};
type SelectOptions = {
  value: string | number;
  label: string;
}[];

type Property =
  | {
      type: "color" | "font";
      name: string;
      description?: string;
      options?: {
        [key: string]: string;
      };
    }
  | {
      type: "number";
      name: string;
      description?: string;
      options: NumberOptions;
    }
  | {
      type: "select";
      name: string;
      description?: string;
      options: SelectOptions;
    };

type SettingComponentProps = {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  options?:
    | NumberOptions
    | SelectOptions
    | {
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
