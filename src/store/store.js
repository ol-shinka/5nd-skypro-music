import { combineReducers, configureStore } from "@reduxjs/toolkit";
import audioPlayer from "./reducer";
import { userActions } from "../api/apiUserActions";
import { authReducer } from "./slices/UserLS";

export const store = configureStore({
  reducer: combineReducers({
    audioplayer: audioPlayer,
    [userActions.reducerPath]: userActions.reducer,
    auth: authReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userActions.middleware),
});
