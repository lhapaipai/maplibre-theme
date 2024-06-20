import { Dispatch, SetStateAction } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { Toggle } from "pentatrion-design/components/input/Toggle";
import { Select } from "pentatrion-design/components/select";
import LinkButton from "./LinkButton";

interface Props {
  theme: ThemeID;
  setTheme: Dispatch<SetStateAction<ThemeID>>;
}

const themeOptions = [
  { value: "legacy", label: "Current" },
  { value: "classic", label: "Classic" },
  { value: "modern", label: "Modern" },
];

export default function NavBar({ theme, setTheme }: Props) {
  const { isDarkMode, setDarkMode } = useDarkMode();
  return (
    <div className="flex-1 flex flex-col">
      <h1 className="h-8 flex items-center mb-4">
        <span className="app-logo text-2xl">
          Map<span className="text-[#82b4fe]">Libre</span>
        </span>
      </h1>
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
          <Select
            variant="ghost"
            options={themeOptions}
            value={theme}
            onChange={(o) => {
              // @ts-expect-error value is ThemeID
              setTheme(o.target.value);
            }}
          ></Select>
        </div>
      </div>
      <div className="flex items-center justify-center h-12">
        <LinkButton
          icon
          color="gray"
          variant="text"
          size="large"
          href="https://github.com/lhapaipai/maplibre-theme"
        >
          <i className="fe-github-circled"></i>
        </LinkButton>
      </div>
    </div>
  );
}
