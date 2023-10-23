import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MainNav = styled.nav`
  max-width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  @media (width <= 1900px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const NavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;

export const LogoImage = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`;

export const NavBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;
export const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`;
export const NavMenu = styled.div`
  display: block;
  visibility: visible;
`;
export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
`;
export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`;

export const MobileOnlyMenuItem = styled(MenuItem)`
  display: none;
`;
export const MenuLink = styled(Link)`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
