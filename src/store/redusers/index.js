import {
  ALL_TRACKS,
  IS_PLAYING,
  CURRENT_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
  SHUFFLE_TRACKS,
} from "../actions/index";

const initialState = {
  allTracks: [],
  currentTrack: null,
  indexCurrentTrack: null,
  isPlaying: false,
  shuffled: false,
  shuffledAllTracks: [],
};

const getShuffledTracks = (array) => {
  const arrayTracks = new Array(...array);
  return arrayTracks.sort(() => Math.random() - 0.5);
};

export default function tracksReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_TRACKS: {
      const { allTracks } = action.payload;

      return {
        ...state,
        allTracks,
      };
    }

    case IS_PLAYING: {
      const isPlaying = action.payload;

      return {
        ...state,
        isPlaying,
      };
    }

    case CURRENT_TRACK: {
      const { track, indexCurrentTrack } = action.payload;

      return {
        ...state,
        currentTrack: track,
        indexCurrentTrack,
      };
    }

    case NEXT_TRACK: {
      const { trackNext, indexNextTrack } = action.payload;

      return {
        ...state,
        currentTrack: trackNext,
        indexCurrentTrack: indexNextTrack,
      };
    }

    case PREV_TRACK: {
      const { trackPrev, indexPrevTrack } = action.payload;

      return {
        ...state,
        currentTrack: trackPrev,
        indexCurrentTrack: indexPrevTrack,
      };
    }

    case SHUFFLE_TRACKS: {
      const { shuffled } = action.payload;
      if (shuffled);
      return {
        ...state,
        shuffled,
        shuffledAllTracks: shuffled && getShuffledTracks(state.allTracks),
      };
    }

    default:
      return state;
  }
}
