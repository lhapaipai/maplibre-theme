import { createPortal } from "react-dom";
import { useRControl } from "maplibre-react-components";

export default function CustomControl() {
  const { container } = useRControl({
    position: "bottom-left",
  });

  return createPortal(
    <>
      <p>Hello world</p>
    </>,
    container
  );
}
