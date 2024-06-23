import { Toggle } from "pentatrion-design/components/input/Toggle";
import { Select } from "pentatrion-design/components/select";
import Customizer from "./Customizer";
import { propertiesByTheme } from "../config/cssVars";
import { useAppSelector } from "../store";
import {
  nameChanged,
  selectThemeCssVars,
  selectThemeName,
} from "../store/themeSlice";
import { modeChanged, selectMode } from "../store/configSlice";

type ThemeOption = {
  value: ThemeID;
  label: string;
};

const themeOptions: ThemeOption[] = [
  { value: "legacy", label: "Current" },
  { value: "classic", label: "Classic" },
  { value: "modern", label: "Modern" },
];

export default function NavBarContent() {
  const themeName = useAppSelector(selectThemeName);
  const themeCssVars = useAppSelector(selectThemeCssVars);
  const mode = useAppSelector(selectMode);

  const properties = propertiesByTheme[themeName];

  return (
    <div className="flex flex-col gap-2 flex-1 p-2">
      <div className="p8n-setting">
        <div>Dark mode</div>
        <Toggle
          checked={mode === "dark"}
          onChange={(e) => modeChanged(e.target.checked ? "dark" : "light")}
        />
      </div>
      <div className="p8n-setting">
        <div>Theme</div>
        <Select<ThemeOption>
          variant="ghost"
          options={themeOptions}
          value={themeName}
          onChange={(o) => {
            nameChanged(o.target.value as ThemeID);
          }}
        ></Select>
      </div>

      <div className="h-1 flex-[0_0_0.25rem] mx-4 bg-gray-1 rounded-full relative"></div>

      {themeCssVars &&
        (properties.length > 0 ? (
          <Customizer />
        ) : (
          <div className="mt-6 text-center">
            This Theme is not Customizable.
          </div>
        ))}
    </div>
  );
}
