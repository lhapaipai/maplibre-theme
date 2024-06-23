import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

type ConfigState = {
  mode: Mode;
};

const initialState: ConfigState = {
  mode: "light",
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    modeChanged(state, action: PayloadAction<Mode>) {
      state.mode = action.payload;
    },
  },
});

export default configSlice.reducer;

export const { modeChanged } = configSlice.actions;

export const selectMode = (state: RootState) => state.config.mode;
