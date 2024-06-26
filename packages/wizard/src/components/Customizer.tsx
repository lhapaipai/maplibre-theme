import { propertiesByTheme } from "../config/cssVars";
import { settingEditors } from "../setting-editor";
import {
  cssVarsChanged,
  selectCssVars,
  selectTheme,
} from "../store/configSlice";
import { useAppDispatch, useAppSelector } from "../store";

const modes: ("light" | "dark")[] = ["light", "dark"];

export default function Customizer() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const properties = propertiesByTheme[theme];
  const cssVars = useAppSelector(selectCssVars);

  function handleChange(
    name: string,
    updatedValue: string,
    mode: "light" | "dark"
  ) {
    if (mode === "light") {
      dispatch(
        cssVarsChanged({
          light: {
            ...cssVars["light"],
            [name]: updatedValue,
          },
          dark: cssVars["dark"],
        })
      );
    } else {
      dispatch(
        cssVarsChanged({
          dark: {
            ...cssVars["dark"],
            [name]: updatedValue,
          },
          light: cssVars["light"],
        })
      );
    }
  }

  return (
    <div>
      {modes.map((mode) => {
        return (
          <div key={mode} className="mt-6">
            <h2>
              <i className={`fe-${mode}`}></i> {mode} theme
            </h2>
            <div className="flex flex-col gap-2">
              {properties.map(({ type, name, options, description }) => {
                const value = cssVars[mode][name];
                if (!value) {
                  return null;
                }
                const Component = settingEditors[type];
                return (
                  <div key={name}>
                    <Component
                      name={name}
                      value={value}
                      onChange={(name, updatedValue) =>
                        handleChange(name, updatedValue, mode)
                      }
                      options={options}
                    />
                    {description && (
                      <div className="text-gray-6 text-xs">{description}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
