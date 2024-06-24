import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cssDefaultValuesByTheme } from "../config/cssVars";
import { type RootState } from ".";

type ThemeState = {
  id: ThemeID;
  cssVars: CssVars;
};

const initialState: ThemeState = {
  id: "modern",
  cssVars: cssDefaultValuesByTheme["modern"],
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeIdChanged(state, action: PayloadAction<ThemeID>) {
      // TODO verify is required
      if (state.id !== action.payload) {
        const newID = action.payload;
        state.id = newID;
        state.cssVars = cssDefaultValuesByTheme[newID];
      }
    },
    themeCssVarsChanged(state, action: PayloadAction<CssVars>) {
      state.cssVars = action.payload;
    },
    themeConfigChanged(state, action: PayloadAction<JsonConfig["theme"]>) {
      const { id, cssVars } = action.payload;
      state.id = id;
      state.cssVars = cssVars;
    },
  },
});

export default themeSlice.reducer;

export const { themeIdChanged, themeCssVarsChanged, themeConfigChanged } =
  themeSlice.actions;

export const selectThemeID = (state: RootState) => state.theme.id;
export const selectThemeCssVars = (state: RootState) => state.theme.cssVars;
