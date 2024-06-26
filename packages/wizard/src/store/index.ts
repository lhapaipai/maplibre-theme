import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import configSlice from "./configSlice";

import {
  errorCatcherMiddleware,
  notificationSlice,
} from "pentatrion-design/redux";

const store = configureStore({
  reducer: {
    notification: notificationSlice,
    app: appSlice,
    config: configSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(errorCatcherMiddleware);
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
