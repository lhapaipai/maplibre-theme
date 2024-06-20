/** @type {import("postcss-load-config").Config} */
const config = {
  plugins: {
    "tailwindcss/nesting": {},
    tailwindcss: {},

    // si vous utilisez le composant <input type="range" />
    // bien le mettre en dernier car tailwind génère du contenu à transformer
    "postcss-input-range": {},
  },
};
export default config;
