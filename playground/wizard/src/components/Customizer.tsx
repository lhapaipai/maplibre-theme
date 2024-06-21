import { settingEditors } from "../setting-editor";

interface Props {
  values: CssValues;
  onChange: (values: CssValues) => void;
  properties: Property[];
}

const modes: ("light" | "dark")[] = ["light", "dark"];

export default function Customizer({ values, onChange, properties }: Props) {
  function handleChange(
    name: string,
    updatedValue: string,
    mode: "light" | "dark"
  ) {
    if (mode === "light") {
      onChange({
        light: {
          ...values["light"],
          [name]: updatedValue,
        },
        dark: values["dark"],
      });
    } else {
      onChange({
        dark: {
          ...values["dark"],
          [name]: updatedValue,
        },
        light: values["light"],
      });
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
            <div className="flex flex-col gap-[2px]">
              {properties.map(({ type, name, options }) => {
                const value = values[mode][name];
                if (!value) {
                  return null;
                }
                const Component = settingEditors[type];
                return (
                  <Component
                    key={name}
                    name={name}
                    value={value}
                    onChange={(name, updatedValue) =>
                      handleChange(name, updatedValue, mode)
                    }
                    options={options}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
