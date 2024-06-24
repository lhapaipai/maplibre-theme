import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cssDefaultValuesByTheme } from "../config/cssVars";
import { type RootState } from ".";

type ThemeState = {
  theme: Theme;
  cssVars: CssVars;
};

const initialState: ThemeState = {
  theme: "modern",
  cssVars: cssDefaultValuesByTheme["modern"],
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    themeChanged(state, action: PayloadAction<Theme>) {
      // TODO verify is required
      if (state.theme !== action.payload) {
        const newTheme = action.payload;
        state.theme = newTheme;
        state.cssVars = cssDefaultValuesByTheme[newTheme];
      }
    },
    cssVarsChanged(state, action: PayloadAction<CssVars>) {
      state.cssVars = action.payload;
    },
    configChanged(state, action: PayloadAction<JsonConfig>) {
      const { theme, cssVars } = action.payload;
      state.theme = theme;
      state.cssVars = cssVars;
    },
  },
});

export default configSlice.reducer;

export const { themeChanged, cssVarsChanged, configChanged } =
  configSlice.actions;

export const selectTheme = (state: RootState) => state.config.theme;
export const selectCssVars = (state: RootState) => state.config.cssVars;
