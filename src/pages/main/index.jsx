import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./style";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { SideBar } from "../../components/Sidebar/Sidebar";
import { TrackList } from "../../components/TrackList/TrackList";
import { getTracksAll } from "../../api";
import { allTracks, setCurrentTrack } from "../../store/actions/index";
import {
  allTracksSelector,
  currentTrackSelector,
} from "../../store/selectors/index";

export function Main() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const tracks = useSelector(allTracksSelector);
  const [loadingTracksError, setLoadingTracksError] = useState(null);
  const currentTrack = useSelector(currentTrackSelector);

  const handleCurrentTrack = (track) => {
    const indexCurrentTrack = tracks.indexOf(track);
    dispatch(setCurrentTrack(track, indexCurrentTrack));
  };

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setLoading(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    getTracksAll()
      .then((track) => {
        dispatch(allTracks(track));
      })
      .catch((error) => {
        setLoadingTracksError(error.message);
      });
  }, []);

  return (
    <div className="App">
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu />
            <TrackList
              isLoading={isLoading}
              tracks={tracks}
              handleCurrentTrack={handleCurrentTrack}
              loadingTracksError={loadingTracksError}
            />
            <SideBar
              isLoading={isLoading}
              loadingTracksError={loadingTracksError}
            />
          </S.Main>
          {currentTrack && (
            <AudioPlayer isLoading={isLoading} currentTrack={currentTrack} />
          )}
          <footer className="footer" />
        </S.Container>
      </S.Wrapper>
    </div>
  );
}
