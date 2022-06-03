import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./reducers/mapReducer";

export const store = configureStore({
  reducer: {
    map: mapReducer,
  },
});
