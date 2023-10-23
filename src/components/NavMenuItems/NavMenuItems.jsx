import * as S from "./style";

export function NavMenuItems(props) {
  return (
    <S.MenuItem>
      <S.MenuLink
        to={props.item.link}
        className="menu__link"
        onClick={props.handleLogout}
      >
        {props.item.text}
      </S.MenuLink>
    </S.MenuItem>
  );
}
