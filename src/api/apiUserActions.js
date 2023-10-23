import { createApi } from "@reduxjs/toolkit/query/react";
import { putDislikeTrack, putLikeTrack } from "../store/actions";
import baseQueryWithReauth from "./baseQueruWithReauth";

const TRACKS_MARKER = "Tracks";

export const userActions = createApi({
  reducerPath: "userActions",
  baseQuery: baseQueryWithReauth,

  endpoints: (builder) => ({
    getMainPlaylist: builder.query({
      query: () => "/catalog/track/all/",
      providesTags: () => [TRACKS_MARKER],
    }),
    getMyPlaylist: builder.query({
      query: () => ({
        url: "/catalog/track/favorite/all/",
      }),
      transformResponse: (response, arg) => {
        return response.map((item) => ({
          ...item,
          stared_user: [
            {
              id: arg.auth.id,
              username: arg.auth.username,
              first_name: arg.auth.first_name,
              last_name: arg.auth.last_name,
              email: arg.auth.email,
            },
          ],
        }));
      },
})


})