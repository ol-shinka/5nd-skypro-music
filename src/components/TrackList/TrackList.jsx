import { useState } from "react";
import Track from "../Tracks/Track";
import CategoryItem from "../CategoryItem/CategoryItem";
import { useDispatch } from "react-redux";
import { setCurrentTrack } from "../../store/actions";
import { useAuthSelector } from "../../auth";
import { compareAsc, compareDesc } from "date-fns";
import * as S from "./style";

const TrackList = () => {
  return (
    <S.ContentTitle>
      <S.PlaylistTitleCol style={{ width: "447px" }}>Трек</S.PlaylistTitleCol>
      <S.PlaylistTitleCol style={{ width: "321px" }}>
        ИСПОЛНИТЕЛЬ
      </S.PlaylistTitleCol>
      <S.PlaylistTitleCol style={{ width: "245px" }}>АЛЬБОМ</S.PlaylistTitleCol>
      <S.PlaylistTitleCol style={{ width: "60px", textAlign: "end" }}>
        <S.PlaylistTitleSvg>
          <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
        </S.PlaylistTitleSvg>
      </S.PlaylistTitleCol>
    </S.ContentTitle>
  );
};

const DEFAULT_TRACKS = "По умолчанию";
const OLD_TRACKS = "Сначала старые";
const NEW_TRACKS = "Сначала новые";

export default function Tracklist({
  error,
  loading,
  tracks = [],
  showTracksLiked = false,
  showSearchBar = true,
  title = "Треки",
}) {
  const dispatch = useDispatch();
  const auth = useAuthSelector();
  const [searchTrack, setSearchTrack] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedYears, setSelectedYears] = useState([DEFAULT_TRACKS]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedArtists, setSelectedArtists] = useState([]);

  const uniq = (value, index, array) => array.indexOf(value) === index;

  const years = [DEFAULT_TRACKS, OLD_TRACKS, NEW_TRACKS];

  const genres = tracks
    .map(({ genre }) => genre)
    .filter((i) => i)
    .filter(uniq)
    .sort();

  const artists = tracks
    .map(({ author }) => author ?? "Неизвестный исполнитель")
    .filter((i) => i)
    .filter(uniq)
    .sort();

  const selectCategory = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
      return;
    }
    setSelectedCategory(category);
  };

  if (error) {
    return (
      <h3>
        Не удалось загрузить плейлист, попробуйте позже
        {JSON.stringify(error.data, null, 2)}
      </h3>
    );
  }

  const filterTracks = () => {
    let filteredTracks = tracks;

    if (selectedGenres.length > 0) {
      filteredTracks = filteredTracks.filter(({ genre }) =>
        selectedGenres.includes(genre),
      );
    }

    if (selectedArtists.length > 0) {
      filteredTracks = filteredTracks.filter(({ author }) =>
        selectedArtists.includes(author),
      );
    }

    if (selectedYears[0] === OLD_TRACKS) {
      filteredTracks = [...filteredTracks].sort((a, b) =>
        compareAsc(new Date(a.release_date), new Date(b.release_date)),
      );
    }

    if (selectedYears[0] === NEW_TRACKS) {
      filteredTracks = [...filteredTracks].sort((a, b) =>
        compareDesc(new Date(a.release_date), new Date(b.release_date)),
      );
    }

    if (searchTrack.length > 0) {
      filteredTracks = filteredTracks.filter(({ name }) =>
        name.toLocaleLowerCase().includes(searchTrack.toLocaleLowerCase()),
      );
    }

    return filteredTracks;
  };

  const filteredTracks = filterTracks();

  return (
    <S.MainCenterBlock>
      <S.CenterBlockSearch>
        <S.SearchSvg>
          <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText
          type="search"
          placeholder="Поиск"
          name="search"
          value={searchTrack}
          onChange={(e) => setSearchTrack(e.target.value)}
        />
      </S.CenterBlockSearch>
      <S.CenterBlockH2>{title}</S.CenterBlockH2>
      {showSearchBar && (
        <S.StyledFiltersContainer>
          <S.CenterBlockFilter>
            <S.FilterTitle>Искать по:</S.FilterTitle>
            <CategoryItem
              title="исполнителю"
              onClick={() => selectCategory("artist")}
              isOpen={selectedCategory === "artist"}
              list={artists}
              selectedValues={selectedArtists}
              setSelectedValues={setSelectedArtists}
            ></CategoryItem>
            <CategoryItem
              title="жанру"
              onClick={() => selectCategory("genre")}
              isOpen={selectedCategory === "genre"}
              list={genres}
              selectedValues={selectedGenres}
              setSelectedValues={setSelectedGenres}
            ></CategoryItem>
          </S.CenterBlockFilter>
          <S.CenterBlockFilter>
            <S.FilterTitle>Сортировка:</S.FilterTitle>
            <CategoryItem
              title={selectedYears[0]}
              onClick={() => selectCategory("year")}
              isOpen={selectedCategory === "year"}
              list={years}
              selectedValues={selectedYears}
              setSelectedValues={setSelectedYears}
              multipleСhoice={false}
              openToLeft={true}
            ></CategoryItem>
          </S.CenterBlockFilter>
        </S.StyledFiltersContainer>
      )}
      <S.CenterBlockContent>
        <TrackList></TrackList>
        <S.ContentPlaylist>
          {loading ? (
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <Track key={item} track={{}} isLoading={true}></Track>
            ))
          ) : tracks.length > 0 ? (
            filteredTracks.length > 0 ? (
              filteredTracks.map((track) => (
                <Track
                  key={track.id}
                  track={track}
                  isLiked={
                    showTracksLiked
                      ? true
                      : !!(track.stared_user ?? []).find(
                          ({ id }) => id === auth.id,
                        )
                  }
                  onClick={() => {
                    dispatch(
                      setCurrentTrack({
                        playlist: tracks,
                        track: track,
                      }),
                    );
                  }}
                ></Track>
              ))
            ) : (
              <h2>По вашему запросу ничего не найдено</h2>
            )
          ) : (
            <h2>В этом плейлисте нет треков</h2>
          )}
        </S.ContentPlaylist>
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  );
}
