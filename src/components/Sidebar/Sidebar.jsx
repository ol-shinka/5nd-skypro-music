import { Link } from "react-router-dom";
import { useAuthSelector, useLogout } from "../../auth";
import * as S from "./style";

export function SideBar({ showCategory }) {
  const logout = useLogout();
  const auth = useAuthSelector();
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarName>{auth.username ?? auth.email}</S.SidebarName>
        <S.SidebarIcon onClick={logout}>
          <img src="img/logout.png" alt="logout" />
        </S.SidebarIcon>
      </S.SidebarPersonal>
      {showCategory ? (
        <S.SidebarBlock>
          <S.SidebarList>
            <>
              <S.SidebarItem>
                <Link className="sidebar__link" to="/category/1">
                  <S.SidebarImage
                    src="img/playlist01.png"
                    alt="classic_music"
                  />
                </Link>
              </S.SidebarItem>
              <S.SidebarItem>
                <Link to="/category/2">
                  <S.SidebarImage
                    src="img/playlist02.png"
                    alt="electro_music"
                  />
                </Link>
              </S.SidebarItem>
              <S.SidebarItem>
                <Link className="sidebar__link" to="/category/3">
                  <S.SidebarImage src="img/playlist03.png" alt="rock_music" />
                </Link>
              </S.SidebarItem>
            </>
          </S.SidebarList>
        </S.SidebarBlock>
      ) : null}
    </S.MainSidebar>
  );
}
export default SideBar;
