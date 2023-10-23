import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import * as S from "./style";

export default function AppWallpaper() {
  const track = useSelector((store) => {
    if (!store.audioplayer.track) {
      return null;
    }
    return store.audioplayer.track;
  });

  return (
    <S.App>
      <S.Wrapper>
        <S.Container>
          <Outlet></Outlet>
          {track ? <AudioPlayer track={track} /> : null}
        </S.Container>
      </S.Wrapper>
    </S.App>
  );
}