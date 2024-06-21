export function hexToRgb(hex: string): [number, number, number] {
  if (!/^#([0-9A-Fa-f]{3}){1,2}$/.test(hex)) {
    throw new Error("Invalid hex color");
  }

  hex = hex.substring(1);

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return [r, g, b];
}

function toHex(component: number): string {
  const hex = component.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

export function rgbToHex(rgb: [number, number, number]): string {
  const [r, g, b] = rgb;

  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    throw new Error("Invalid RGB color");
  }

  const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  return hexColor;
}
