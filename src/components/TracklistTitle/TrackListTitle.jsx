import * as S from "./style";

export function TrackListTitle() {
  return (
    <S.ContentTitle>
      <S.col01>Трек</S.col01>
      <S.col02>ИСПОЛНИТЕЛЬ</S.col02>
      <S.col03>АЛЬБОМ</S.col03>
      <S.col04>
        <S.PlaylistTitleSvg alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch" />
        </S.PlaylistTitleSvg>
      </S.col04>
    </S.ContentTitle>
  );
}
