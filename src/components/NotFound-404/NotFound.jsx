import { NavLink } from "react-router-dom";
import * as S from "./style";
import * as Styled from "../TrackList/style";

export function NotFound() {
  return (
    <Styled.MainCenterBlock>
      <Styled.CenterBlockSearch>
        <Styled.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </Styled.SearchSvg>
        <Styled.SearchText type="search" placeholder="Поиск" name="search" />
      </Styled.CenterBlockSearch>

      <S.NotFoundBlock>
        <S.NotFoundBlockTitle>404</S.NotFoundBlockTitle>
        <S.NotFoundBlockItem>
          <S.NotFoundBlockItemTitle>
            Страница не найдена
          </S.NotFoundBlockItemTitle>
          <img src="../img/icon/smile_crying.svg" alt="smile_crying" />
        </S.NotFoundBlockItem>
        <S.NotFoundBlockText>
          Возможно, она была удалена
          <br /> или перенесена на другой адрес
        </S.NotFoundBlockText>
        <NavLink to="/">
          <S.NotFoundBlockButton>Вернуться на главную</S.NotFoundBlockButton>
        </NavLink>
      </S.NotFoundBlock>
    </Styled.MainCenterBlock>
  );
}
