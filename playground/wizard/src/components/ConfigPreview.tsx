import {
  ModalDescription,
  ModalHeader,
} from "pentatrion-design/components/modal";
import { cssInJsToCss } from "../lib/css";
import { useAppSelector } from "../store";
import { selectThemeCssVars, selectThemeName } from "../store/themeSlice";

export default function ConfigPreview() {
  const themeName = useAppSelector(selectThemeName);
  const themeCssVars = useAppSelector(selectThemeCssVars);

  const cssIconTheme =
    themeCssVars?.light["--ml-font-icons"]?.substring(17) || "default";

  const jsCode = `import "maplibre-theme/icons.${cssIconTheme}.css";
import "maplibre-theme/${themeName}.css";
`;

  const cssCode = cssInJsToCss({
    ".maplibregl-map": themeCssVars?.light,
    ".dark .maplibregl-map": themeCssVars?.dark,
  });
  console.log(cssCode);
  return (
    <>
      <ModalHeader>
        <div className="ml-4">Configuration</div>
      </ModalHeader>
      <ModalDescription>
        <div className="p-4">
          <p>Add this lines into your js code</p>
          <pre className="text-sm shadow-inner overflow-x-auto p-4 rounded bg-gray-1">
            <code>{jsCode}</code>
          </pre>
          <p>Add this rules into your css code</p>
          <pre className="h-72 text-sm overflow-x-auto overflow-y-auto shadow-inner p-4 rounded bg-gray-1">
            <code>{cssCode}</code>
          </pre>
        </div>
      </ModalDescription>
    </>
  );
}
