import NavMenu from "../NavMenu/NavMenu";
import SideBar from "../Sidebar/Sidebar";
import * as S from "./style";

export default function SamplePage({ children, showCategory = false }) {
  return (
    <S.Main>
      <NavMenu />
      {children}
      <SideBar showCategory={showCategory} />
    </S.Main>
  );
}
