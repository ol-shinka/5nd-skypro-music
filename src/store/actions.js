export const SET_CURRENT_TRACK = "SET_CURRENT_TRACK";
export const NEXT_TRACK = "NEXT_TRACK";
export const PREV_TRACK = "PREV_TRACK";
export const TOGGLE_SUFFLED = "TOGGLE_SUFFLED";
export const PLAY = "PLAY";
export const PAUSE = "PAUSE";
export const LIKE_TRACK = "LIKE";
export const DISLIKE_TRACK = "DISLIKE";

export const setCurrentTrack = ({ playlist, track }) => ({
  type: SET_CURRENT_TRACK,
  payload: {
    playlist,
    track,
  },
});

export const nextTrack = () => ({
  type: NEXT_TRACK,
});

export const prevTrack = () => ({
  type: PREV_TRACK,
});

export const shuffleTracks = () => ({
  type: TOGGLE_SUFFLED,
});

export const playTrack = () => ({
  type: PLAY,
});

export const pauseTrack = () => ({
  type: PAUSE,
});

export const putLikeTrack = ({ id, auth }) => ({
  type: LIKE_TRACK,
  payload: { id, auth },
});

export const putDislikeTrack = ({ id, auth }) => ({
  type: DISLIKE_TRACK,
  payload: { id, auth },
});
