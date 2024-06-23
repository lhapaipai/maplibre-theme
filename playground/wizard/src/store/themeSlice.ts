import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cssDefaultValuesByTheme } from "../config/cssVars";
import { type RootState } from ".";

type ThemeState = {
  name: ThemeID;
  cssVars: CssVars;
};

const initialState: ThemeState = {
  name: "modern",
  cssVars: cssDefaultValuesByTheme["modern"],
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    nameChanged(state, action: PayloadAction<ThemeID>) {
      // TODO verify is required
      if (state.name !== action.payload) {
        const newTheme = action.payload;
        state.name = newTheme;
        state.cssVars = cssDefaultValuesByTheme[newTheme];
      }
    },
    cssVarsChanged(state, action: PayloadAction<CssVars>) {
      state.cssVars = action.payload;
    },
  },
});

export default themeSlice.reducer;

export const { nameChanged, cssVarsChanged } = themeSlice.actions;

export const selectThemeName = (state: RootState) => state.theme.name;
export const selectThemeCssVars = (state: RootState) => state.theme.cssVars;
