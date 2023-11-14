import * as S from "../main/style";
import { NotFound } from "../../components/NotFound-404/NotFound";

export function NotFound404() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NotFound />
        </S.Main>
        <footer className="footer" />
      </S.Container>
    </S.Wrapper>
  );
}
export default NotFound404;
