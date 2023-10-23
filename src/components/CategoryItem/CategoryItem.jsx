import * as S from "./style";

export default function CategoryItem({
  selectedValues,
  setSelectedValues,
  isOpen,
  title,
  onClick,
  list,
  multipleСhoice = true,
}) {
  const handleItemClick = (item) => {
    const index = selectedValues.indexOf(item);

    if (multipleСhoice) {
      if (index > -1) {
        setSelectedValues(selectedValues.toSpliced(index, 1));
      } else {
        setSelectedValues([...selectedValues, item]);
      }
      return;
    }

    setSelectedValues([item]);
  };

  return (
    <S.FilterButton>
      <S.CategoryButton onClick={onClick}>{title}</S.CategoryButton>
      {!isOpen ? null : (
        <S.FilterOpen>
          <S.FilterOpenList>
            {list.map((item) => {
              return (
                <S.FilterOpenListItem
                  key={item}
                  onClick={() => handleItemClick(item)}
                >
                  {selectedValues.includes(item) ? (
                    <S.StyledStrongItem>{item}</S.StyledStrongItem>
                  ) : (
                    item
                  )}
                </S.FilterOpenListItem>
              );
            })}
          </S.FilterOpenList>
        </S.FilterOpen>
      )}

      {selectedValues.length > 0 && !(selectedValues[0] === "По умолчанию") ? (
        <S.StyledNumberCircle>{selectedValues.length}</S.StyledNumberCircle>
      ) : null}
    </S.FilterButton>
  );
}
