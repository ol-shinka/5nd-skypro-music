import * as S from "./style";
import { Tracks } from "../Tracks/Tracks";
import { TrackListTitle } from "../TracklistTitle/TrackListTitle";
import { TrackListFilter } from "../TrackListFilter/TrackListFilter";

export function TrackList({
  isLoading,
  tracks,
  handleCurrentTrack,
  loadingTracksError,
}) {
  return (
    <S.MainCenterBlock>
      <S.CenterBlockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterBlockSearch>
      <S.CenterblockH2 className="centerblock__h2">Треки</S.CenterblockH2>
      <TrackListFilter />
      <S.CenterblockContent>
        <TrackListTitle />
        {loadingTracksError ? (
          <div>Не удалось загрузить плейлист, попробуйте позже</div>
        ) : (
          <Tracks
            isLoading={isLoading}
            tracks={tracks}
            handleCurrentTrack={handleCurrentTrack}
          />
        )}
      </S.CenterblockContent>
    </S.MainCenterBlock>
  );
}
