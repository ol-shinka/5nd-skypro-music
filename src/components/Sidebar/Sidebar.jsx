import { useContext } from "react";
import * as S from "./style";
import { arrPlailist } from "../../utils/arrPlaylist";
import { SkeletonSideBar } from "../Tracks/style";
import { UserContext } from "../Context";

export function SideBar({ isLoading, loadingTracksError }) {
  const categoryPlayList = arrPlailist.map((category) => (
    <S.SideBarItem key={category.id}>
      {isLoading && !loadingTracksError ? (
        <S.SideBarLink to={`/category/${category.id}`}>
          <S.SideBarImg src={category.img} alt={category.alt} />
        </S.SideBarLink>
      ) : (
        <SkeletonSideBar> </SkeletonSideBar>
      )}
    </S.SideBarItem>
  ));

  const { user, handleLogout } = useContext(UserContext);

  return (
    <S.MainSideBar>
      <S.SideBarPersonal>
        <S.SideBarPersonalName>{user}</S.SideBarPersonalName>
        <S.SideBarIcon onClick={handleLogout}>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </S.SideBarIcon>
      </S.SideBarPersonal>
      <S.SideBarBlock>
        <S.SideBarList>{categoryPlayList}</S.SideBarList>
      </S.SideBarBlock>
    </S.MainSideBar>
  );
}
