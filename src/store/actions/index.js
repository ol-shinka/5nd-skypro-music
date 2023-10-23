export const ALL_TRACKS = "ALL_TRACKS";
export const IS_PLAYING = "IS_PLAYING";
export const CURRENT_TRACK = "CURRENT_TRACK";
export const NEXT_TRACK = "NEXT_TRACK";
export const PREV_TRACK = "PREV_TRACK";
export const SHUFFLE_TRACKS = "SHUFFLE_TRACKS";

export const allTracks = (allTracks) => ({
  type: ALL_TRACKS,
  payload: { allTracks },
});

export const setIsPlaying = (isPlaying) => ({
  type: IS_PLAYING,
  payload: isPlaying,
});

export const setCurrentTrack = (track, indexCurrentTrack) => ({
  type: CURRENT_TRACK,
  payload: { track, indexCurrentTrack },
});
export const nextTrack = (trackNext, indexNextTrack) => ({
  type: NEXT_TRACK,
  payload: { trackNext, indexNextTrack },
});
export const prevTrack = (trackPrev, indexPrevTrack) => ({
  type: PREV_TRACK,
  payload: { trackPrev, indexPrevTrack },
});

export const toggleShuffleTracks = (shuffled) => ({
  type: SHUFFLE_TRACKS,
  payload: { shuffled },
});
