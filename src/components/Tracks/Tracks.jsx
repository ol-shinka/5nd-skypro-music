import { useSelector } from "react-redux";
import * as S from "./style";
import {
  currentTrackSelector,
  isPlayingSelector,
} from "../../store/selectors/index";

export function Tracks({ isLoading, tracks, handleCurrentTrack }) {
  const currentTrack = useSelector(currentTrackSelector);
  const isPlaying = useSelector(isPlayingSelector);

  const trackItems = tracks.map((track) => (
    <S.PlaylistItem key={track.id}>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            {currentTrack && currentTrack.id === track.id ? (
              <S.PlayingTrack $playing={isPlaying} />
            ) : (
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </S.TrackTitleSvg>
            )}
          </S.TrackTitleImage>

          {isLoading ? (
            <div className="track__title-text">
              <S.TrackTitleLink onClick={() => handleCurrentTrack(track)}>
                {track.name}
                {track.remix ? (
                  <S.TrackTitleSpan>({track.remix})</S.TrackTitleSpan>
                ) : (
                  ""
                )}
              </S.TrackTitleLink>
            </div>
          ) : (
            <S.Skeleton> </S.Skeleton>
          )}
        </S.TrackTitle>

        {isLoading ? (
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">{track.author}</S.TrackAuthorLink>
          </S.TrackAuthor>
        ) : (
          <S.Skeleton> </S.Skeleton>
        )}

        {isLoading ? (
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">{track.album}</S.TrackAlbumLink>
          </S.TrackAlbum>
        ) : (
          <S.SkeletonAlbum> </S.SkeletonAlbum>
        )}

        <div className="track__time">
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.TrackTimeSvg>
          <S.TrackTimeText>
            {" "}
            {`${Math.floor(track.duration_in_seconds / 60)}:${
              track.duration_in_seconds % 60 < 10
                ? `${track.duration_in_seconds % 60}0`
                : track.duration_in_seconds % 60
            }` ||
              (track.duration_in_seconds % 60 === 0
                ? "00"
                : track.duration_in_seconds % 60)}
          </S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  ));

  return <S.ContentPlaylist>{trackItems}</S.ContentPlaylist>;
}
