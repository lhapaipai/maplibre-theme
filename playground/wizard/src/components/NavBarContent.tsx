import { Dispatch, SetStateAction } from "react";
import { Toggle } from "pentatrion-design/components/input/Toggle";
import { Select } from "pentatrion-design/components/select";
import Customizer from "./Customizer";
import { propertiesByTheme } from "../config/cssValues";

interface Props {
  isDarkMode: boolean;
  setDarkMode: (val: boolean) => void;
  theme: ThemeID;
  setTheme: Dispatch<SetStateAction<ThemeID>>;
  themeCssValues: CssValues | null;
  setThemeCssValues: Dispatch<SetStateAction<CssValues | null>>;
}

type ThemeOption = {
  value: ThemeID;
  label: string;
};

const themeOptions: ThemeOption[] = [
  { value: "legacy", label: "Current" },
  { value: "classic", label: "Classic" },
  { value: "modern", label: "Modern" },
];

export default function NavBarContent({
  isDarkMode,
  setDarkMode,
  theme,
  setTheme,
  themeCssValues,
  setThemeCssValues,
}: Props) {
  const properties = propertiesByTheme[theme];

  return (
    <div className="flex-1 flex flex-col overflow-y-auto px-2">
      <div className="flex flex-col gap-2 flex-1">
        <div className="p8n-setting">
          <div>Dark mode</div>
          <Toggle
            checked={isDarkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
        </div>
        <div className="p8n-setting">
          <div>Theme</div>
          <Select<ThemeOption>
            variant="ghost"
            options={themeOptions}
            value={theme}
            onChange={(o) => {
              setTheme(o.target.value as ThemeID);
            }}
          ></Select>
        </div>

        <div className="h-1 flex-[0_0_0.25rem] mx-4 bg-gray-1 rounded-full relative"></div>

        {themeCssValues &&
          (properties.length > 0 ? (
            <Customizer
              values={themeCssValues}
              onChange={setThemeCssValues}
              properties={properties}
            />
          ) : (
            <div className="mt-6 text-center">
              This Theme is not Customizable.
            </div>
          ))}
      </div>
    </div>
  );
}
