import { setAuthUser } from "../store/slices/UserLS";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
  const result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status !== 401) {
    return result;
  }
  //перебрасывает на авторизацию
  const forceLogout = () => {
    api.dispatch(setAuthUser(null));
    window.location.navigate("/login");
  };
  const { auth } = api.getState();
  if (!auth.refresh) {
    return forceLogout();
  }

  const refreshToken = await baseQuery(
    {
      url: "/user/token/refresh/",
      method: "POST",
      body: {
        refresh: auth.refresh,
      },
    },
    api,
    extraOptions,
  );

  if (!refreshToken.data.access) {
    return forceLogout();
  }

  api.dispatch(setAuthUser({ ...auth, access: refreshToken.data.access }));

  const retryResult = await baseQuery(args, api, extraOptions);

  if (retryResult?.error?.status === 401) {
    return forceLogout();
  }
  return retryResult;
};

export default baseQueryWithReauth;
