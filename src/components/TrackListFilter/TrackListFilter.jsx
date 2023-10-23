import { useState } from "react";
import * as S from "./style";
import { TrackListFilterCategory } from "../TrackListFilterCategory/TrackListFilterCategory";
import arrTracks from "../../utils/arrTracks";

export function TrackListFilter() {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("");
  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <TrackListFilterCategory
        nameCategory="исполнителю"
        content={arrTracks.map((track) => (
          <S.FilterItem key={track.id}>{track.TrackAuthor}</S.FilterItem>
        ))}
        isActiveCategory={activeCategoryFilter}
        setActiveCategory={setActiveCategoryFilter}
      />
      <TrackListFilterCategory
        nameCategory="году выпуска"
        isActiveCategory={activeCategoryFilter}
        setActiveCategory={setActiveCategoryFilter}
        content={arrTracks.map((track) => (
          <S.FilterItem key={track.id}>{track.year}</S.FilterItem>
        ))}
      />
      <TrackListFilterCategory
        nameCategory="жанру"
        isActiveCategory={activeCategoryFilter}
        setActiveCategory={setActiveCategoryFilter}
        content={arrTracks.map((track) => (
          <S.FilterItem key={track.id}>{track.genre}</S.FilterItem>
        ))}
      />
    </S.CenterblockFilter>
  );
}
