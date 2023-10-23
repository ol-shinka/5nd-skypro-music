import * as S from "./style";

export function TrackListFilterCategory({
  nameCategory,
  content,
  isActiveCategory,
  setActiveCategory,
}) {
  const switchСategoryFilter = () =>
    setActiveCategory(isActiveCategory === nameCategory ? "" : nameCategory);

  return (
    <S.FilterCategoryName>
      <S.FilterButton
        type="button"
        onClick={switchСategoryFilter}
        $activeStyle={isActiveCategory === nameCategory}
      >
        {nameCategory}
      </S.FilterButton>
      {isActiveCategory === nameCategory && (
        <S.FilterCategoryMenu>
          <S.filterList>{content}</S.filterList>
        </S.FilterCategoryMenu>
      )}
    </S.FilterCategoryName>
  );
}
