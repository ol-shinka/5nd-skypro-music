import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./style";
import { SkeletonPlayBar } from "../Tracks/style";
import { AudioPlayerIcons } from "../AudioPlayerIcons/AudioPlayerIcons";
import { AudioVolume } from "../AudioVolume/AudioVolume";
import { BarPlayerProgress } from "../AudioPlayerProgress/AudioPlayerProgress";
import {
  isPlayingSelector,
  allTracksSelector,
  indexTrackSelector,
  shuffleSelector,
  shuffleTracks,
} from "../../store/selectors/index";
import {
  setIsPlaying,
  nextTrack,
  prevTrack,
  toggleShuffleTracks,
} from "../../store/actions/index";

export function AudioPlayer({ isLoading, currentTrack }) {
  const dispatch = useDispatch();
  const isPlaying = useSelector(isPlayingSelector);
  const shuffle = useSelector(shuffleSelector);
  const shuffleAllTracks = useSelector(shuffleTracks);
  const tracks = useSelector(allTracksSelector);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const indexTrack = useSelector(indexTrackSelector);
  const [repeatTrack, setRepeatTrack] = useState(false);

  const handleStart = () => {
    audioRef.current.play();
    dispatch(setIsPlaying(true));
  };
  const handleStop = () => {
    audioRef.current.pause();
    dispatch(setIsPlaying(false));
  };

  const togglePlay = isPlaying ? handleStop : handleStart;
  const arrayTracksAll = shuffle ? shuffleAllTracks : tracks;

  useEffect(() => {
    handleStart();
    audioRef.current.onended = () => {
      dispatch(nextTrack(arrayTracksAll[indexTrack + 1], indexTrack + 1));
    };
  }, [currentTrack]);

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };
  const onTimeUpdate = () => {
    setTimeProgress(audioRef.current.currentTime);
  };

  const toggleTrackRepeat = () => {
    audioRef.current.loop = !repeatTrack;
    setRepeatTrack(!repeatTrack);
  };
  const toggleCurrentTrack = (alt) => {
    if (alt === "next") {
      const indexNextTrack = indexTrack + 1;
      return dispatch(
        nextTrack(arrayTracksAll[indexNextTrack], indexNextTrack),
      );
    }
    if (alt === "prev" && indexTrack > 0) {
      const indexPredTrack = indexTrack - 1;
      return dispatch(
        prevTrack(arrayTracksAll[indexPredTrack], indexPredTrack),
      );
    }
  };

  return (
    <S.Bar>
      <audio
        src={currentTrack.track_file}
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
      />
      <S.BarContent>
        <BarPlayerProgress
          duration={duration}
          timeProgress={timeProgress}
          audioRef={audioRef}
        />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <AudioPlayerIcons
                alt="prev"
                click={() => {
                  toggleCurrentTrack("prev");
                }}
              />
              <AudioPlayerIcons
                alt={isPlaying ? "pause" : "play"}
                click={togglePlay}
              />
              <AudioPlayerIcons
                alt="next"
                click={() => {
                  toggleCurrentTrack("next");
                }}
              />
              <AudioPlayerIcons alt="repeat" click={toggleTrackRepeat} />
              <AudioPlayerIcons
                alt="shuffle"
                click={() => {
                  dispatch(toggleShuffleTracks(!shuffle));
                }}
              />
            </S.PlayerControls>
            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.TrackPlaySvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackPlaySvg>
                </S.TrackPlayImage>

                {isLoading ? (
                  <S.TrackPlayAuthor>
                    <S.TrackPlayAuthorLink href="http://">
                      {currentTrack.name}
                    </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                ) : (
                  <SkeletonPlayBar> </SkeletonPlayBar>
                )}

                {isLoading ? (
                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink href="http://">
                      {currentTrack.author}
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                ) : (
                  <SkeletonPlayBar> </SkeletonPlayBar>
                )}
              </S.TrackPlayContain>
              <S.TrackLikeDis>
                <S.TrackLike>
                  <S.TrackLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </S.TrackLikeSvg>
                </S.TrackLike>
                <S.TrackDislike>
                  <S.TrackDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </S.TrackDislikeSvg>
                </S.TrackDislike>
              </S.TrackLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <AudioVolume audioRef={audioRef} />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
