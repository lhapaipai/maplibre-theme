import { useEffect, useState } from "react";

type DarkModeReturn = {
  isDarkMode: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
  setDarkMode: (value: boolean) => void;
};

export function useDarkMode(): DarkModeReturn {
  const [isDarkMode, setDarkMode] = useState(() =>
    document.body.classList.contains("dark")
  );

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return {
    isDarkMode,
    toggle: () => {
      setDarkMode((prev) => !prev);
    },
    enable: () => {
      setDarkMode(true);
    },
    disable: () => {
      setDarkMode(false);
    },
    setDarkMode,
  };
}
