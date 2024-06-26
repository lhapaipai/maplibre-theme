import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cssDefaultValuesByTheme } from "../config/cssVars";
import { type RootState } from ".";

type ThemeState = {
  theme: Theme;
  icons: IconSet;
  cssVars: CssVars;
};

const initialState: ThemeState = {
  theme: "modern",
  icons: "default",
  cssVars: cssDefaultValuesByTheme["modern"],
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    themeChanged(state, action: PayloadAction<Theme>) {
      if (state.theme !== action.payload) {
        const newTheme = action.payload;
        state.theme = newTheme;
        state.cssVars = cssDefaultValuesByTheme[newTheme];
      }
    },
    iconsChanged(state, action: PayloadAction<IconSet>) {
      state.icons = action.payload;
    },
    cssVarsChanged(state, action: PayloadAction<CssVars>) {
      state.cssVars = action.payload;
    },
    configChanged(state, action: PayloadAction<JsonConfig>) {
      const { theme, icons, cssVars } = action.payload;
      state.theme = theme;
      state.icons = icons;
      state.cssVars = cssVars;
    },
  },
});

export default configSlice.reducer;

export const { themeChanged, cssVarsChanged, configChanged, iconsChanged } =
  configSlice.actions;

export const selectConfig = (state: RootState) => state.config;
export const selectTheme = (state: RootState) => state.config.theme;
export const selectIcons = (state: RootState) => state.config.icons;
export const selectCssVars = (state: RootState) => state.config.cssVars;
