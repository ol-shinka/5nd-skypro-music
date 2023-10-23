import { combineReducers, configureStore } from "@reduxjs/toolkit";
import audioPlayer from "./reducer";
import { TracklistApi } from "../api/apiUserActions";
import { authReducer } from "./slices/UserLS";

export const store = configureStore({
  reducer: combineReducers({
    audioplayer: audioPlayer,
    [TracklistApi.reducerPath]: TracklistApi.reducer,
    auth: authReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TracklistApi.middleware),
});
