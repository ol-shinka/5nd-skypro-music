import { useState } from "react";
import * as S from "./style";
import { useLogout } from "../../auth";
import { Link } from "react-router-dom";

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  const logout = useLogout();

  return (
    <S.MainNav>
      <Link to="/">
        <S.NavLogo>
          <S.LogoImage src="/img/logo.png" alt="logo" />
        </S.NavLogo>
      </Link>
      <S.NavBurger onClick={() => setOpen(!open)}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>

      {open ? (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink to="/">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/collections">Мои треки</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                }}
              >
                Выйти
              </S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      ) : null}
    </S.MainNav>
  );
}
