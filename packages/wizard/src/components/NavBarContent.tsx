import { Toggle } from "pentatrion-design/input";
import { type Option, Select } from "pentatrion-design/select";
import Customizer from "./Customizer";
import { propertiesByTheme } from "../config/cssVars";
import { useAppDispatch, useAppSelector } from "../store";
import { themeChanged, iconsChanged, selectConfig } from "../store/configSlice";
import { selectMode, modeChangedAction } from "../store/appSlice";

type ThemeOption = {
  value: Theme;
  label: string;
};

const themeOptions: ThemeOption[] = [
  { value: "legacy", label: "Current" },
  { value: "classic", label: "Classic" },
  { value: "modern", label: "Modern" },
];

const iconOptions: Option[] = [
  {
    label: "Default",
    value: "default",
  },
  {
    label: "Lucide",
    value: "lucide",
  },
];

export default function NavBarContent() {
  const dispatch = useAppDispatch();
  const { theme, icons, cssVars } = useAppSelector(selectConfig);

  const mode = useAppSelector(selectMode);

  const properties = propertiesByTheme[theme];

  return (
    <div className="flex flex-col gap-2 flex-1 p-2">
      <div className="p8n-setting">
        <div>Dark mode</div>
        <Toggle
          checked={mode === "dark"}
          onChange={(e) =>
            dispatch(modeChangedAction(e.target.checked ? "dark" : "light"))
          }
        />
      </div>
      <div className="p8n-setting">
        <div>Theme</div>
        <Select<ThemeOption>
          variant="normal"
          options={themeOptions}
          value={theme}
          onChange={(o) => {
            dispatch(themeChanged(o.target.value as Theme));
          }}
        ></Select>
      </div>
      <div className="p8n-setting">
        <div>Icons</div>
        <Select
          variant="normal"
          options={iconOptions}
          value={icons}
          onChange={(o) => {
            dispatch(iconsChanged(o.target.value as IconSet));
          }}
        ></Select>
      </div>
      <div className="h-1 flex-[0_0_0.25rem] mx-4 bg-gray-1 rounded-full relative"></div>

      {cssVars &&
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
