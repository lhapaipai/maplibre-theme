import { propertiesByTheme } from "../config/cssVars";
import { settingEditors } from "../setting-editor";
import { themeCssVarsChanged } from "../store/themeSlice";
import { useAppDispatch, useAppSelector } from "../store";
import { selectThemeCssVars, selectThemeID } from "../store/themeSlice";

const modes: ("light" | "dark")[] = ["light", "dark"];

export default function Customizer() {
  const dispatch = useAppDispatch();
  const themeID = useAppSelector(selectThemeID);
  const properties = propertiesByTheme[themeID];
  const themeCssVars = useAppSelector(selectThemeCssVars);

  function handleChange(
    name: string,
    updatedValue: string,
    mode: "light" | "dark"
  ) {
    if (mode === "light") {
      dispatch(
        themeCssVarsChanged({
          light: {
            ...themeCssVars["light"],
            [name]: updatedValue,
          },
          dark: themeCssVars["dark"],
        })
      );
    } else {
      dispatch(
        themeCssVarsChanged({
          dark: {
            ...themeCssVars["dark"],
            [name]: updatedValue,
          },
          light: themeCssVars["light"],
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
                const value = themeCssVars[mode][name];
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
