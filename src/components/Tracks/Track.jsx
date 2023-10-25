import { useSelector } from "react-redux";
import "./Track.css";
import {
  useDislikeTrackMutation,
  useLikeTrackMutation,
} from "../../api/apiUserActions";
import * as S from "./style";

export default function Track({ track, isLoading, onClick, isLiked }) {
  const time =
    Math.floor(track.duration_in_seconds / 60)
      .toString()
      .padStart(2, "0") +
    ":" +
    (track.duration_in_seconds % 60).toString().padStart(2, "0");

  const { playing, track: currentTrack } = useSelector(
    (store) => store.audioplayer,
  );

  const [like, { error: likeError }] = useLikeTrackMutation();
  const [dislike, { error: dislikeError }] = useDislikeTrackMutation();

  const handleLikeClick = () => {
    if (isLiked) {
      dislike({
        id: track.id,
      });
    } else {
      like({
        id: track.id,
      });
    }
  };

  const error = likeError ?? dislikeError ?? null;

  if (error) {
    alert(`Ошибка лайка: ${error.message}`);
  }

  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            {currentTrack && currentTrack?.id === track.id ? (
              <div
                className={playing ? "playing-track -playing" : "playing-track"}
              ></div>
            ) : (
              <S.TrackTitleSvg>
                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
            )}
          </S.TrackTitleImage>
          <div className="track__title-text">
            {isLoading ? (
              <S.Skeleton></S.Skeleton>
            ) : (
              <S.TrackTitleLink
                href="#1"
                onClick={(event) => {
                  event.preventDefault();
                  onClick();
                }}
              >
                {track.name} <S.TrackTitleSpan></S.TrackTitleSpan>
              </S.TrackTitleLink>
            )}
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          {isLoading ? (
            <S.Skeleton></S.Skeleton>
          ) : (
            <S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
          )}
        </S.TrackAuthor>
        <S.TrackAlbum>
          {isLoading ? (
            <S.Skeleton></S.Skeleton>
          ) : (
            <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
          )}
        </S.TrackAlbum>
        <div className="track__time">
          <S.TrackTimeSvg onClick={handleLikeClick}>
            {isLiked ? (
              <use xlinkHref="/img/icon/sprite.svg#icon-dislike" />
            ) : (
              <use xlinkHref="/img/icon/sprite.svg#icon-like" />
            )}
          </S.TrackTimeSvg>

          {isLoading ? (
            <S.TrackTimeText>00:00</S.TrackTimeText>
          ) : (
            <S.TrackTimeText>{time}</S.TrackTimeText>
          )}
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}
