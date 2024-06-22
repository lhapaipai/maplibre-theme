type ThemeID = "modern" | "classic" | "legacy";

type SettingType = "color" | "font" | "number" | "shadow";

type NumberOptions = {
  min?: number;
  max?: number;
  step?: number;
  unit?: "px" | "rem" | "default";
};
type ShadowOptions = {
  category: "modern" | "classic" | "ring";
};

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
      type: "shadow";
      name: string;
      description?: string;
      options: ShadowOptions;
    };

type SettingComponentProps = {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  options?:
    | NumberOptions
    | ShadowOptions
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
