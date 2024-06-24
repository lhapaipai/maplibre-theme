import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from ".";

type ConfigState = {
  mode: Mode;
};

const initialState: ConfigState = {
  mode: "light",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    modeChanged(state, action: PayloadAction<Mode>) {
      state.mode = action.payload;
    },
  },
});

export default appSlice.reducer;

export const { modeChanged } = appSlice.actions;

export const selectMode = (state: RootState) => state.app.mode;

export const modeChangedAction =
  (mode: "light" | "dark") => (dispatch: AppDispatch) => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(mode);

    dispatch(modeChanged(mode));
  };
