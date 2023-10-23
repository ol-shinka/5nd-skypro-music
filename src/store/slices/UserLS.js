import { createSlice } from "@reduxjs/toolkit";
const KEY_AUTHORIZATION = "auth";

function getUserLS() {
  try {
    return JSON.parse(localStorage.getItem(KEY_AUTHORIZATION));
  } catch (error) {
    return null;
  }
}

const initialState = {
  id: 0,
  email: "",
  access: "",
  refresh: "",
  first_name: "",
  last_name: "",
};

const authSlice = createSlice({
  name: "auth",

  initialState: getUserLS() ?? initialState,
  reducers: {
    setAuthUser(state, action) {
      const payload = action.payload ?? initialState;

      state.id = payload.id;
      state.email = payload.email;
      state.username = payload.username;
      state.access = payload.access;
      state.refresh = payload.refresh;
      state.first_name = payload.first_name;
      state.last_name = payload.last_name;

      localStorage.setItem(KEY_AUTHORIZATION, JSON.stringify(state));
    },
  },
});
export const { setAuthUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
