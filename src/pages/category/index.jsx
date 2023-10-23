import { useParams } from "react-router-dom";
import * as S from "../main/style";
import { arrPlailist } from "../../utils/arrPlaylist";

export function Category() {
  const params = useParams();

  const category = arrPlailist.find(
    (element) => element.id === Number(params.id),
  );

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <h1>CategoryPage {category.id}</h1>
          <img src={category.img} alt={category.alt} />
        </S.Main>
        <footer className="footer" />
      </S.Container>
    </S.Wrapper>
  );
}
