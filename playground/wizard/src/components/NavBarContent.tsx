import { Toggle } from "pentatrion-design/components/input/Toggle";
import { Select } from "pentatrion-design/components/select";
import Customizer from "./Customizer";
import { propertiesByTheme } from "../config/cssVars";
import { useAppDispatch, useAppSelector } from "../store";
import { themeChanged, selectCssVars, selectTheme } from "../store/configSlice";
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

export default function NavBarContent() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const cssVars = useAppSelector(selectCssVars);
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
          variant="ghost"
          options={themeOptions}
          value={theme}
          onChange={(o) => {
            dispatch(themeChanged(o.target.value as Theme));
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
