import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./redusers/index";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  },
});

