import {
  ModalDescription,
  ModalHeader,
} from "pentatrion-design/components/modal";
import { cssInJsToCss } from "../lib/css";

interface Props {
  theme: ThemeID;
  themeCssValues: CssValues | null;
}
export default function ConfigPreview({ theme, themeCssValues }: Props) {
  const cssIconTheme =
    themeCssValues?.light["--ml-font-icons"]?.substring(17) || "default";

  const jsCode = `import "maplibre-theme/icons.${cssIconTheme}.css";
import "maplibre-theme/${theme}.css";
`;

  const cssCode = cssInJsToCss({
    ".maplibregl-map": themeCssValues?.light,
    ".dark .maplibregl-map": themeCssValues?.dark,
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
