import { styled } from "styled-components";

export const StyledNumberCircle = styled.div`
  color: white;
  background-color: #ad61ff;
  width: 26px;
  height: 26px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -8px;
  top: -8px;
  font-family: StratosSkyeng;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px; /* 100% */
`;

export const StyledStrongItem = styled.strong`
  color: #b672ff;
`;
export const FilterButton = styled.div`
  position: relative;
  margin: 5px;
`;

export const CategoryButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;
  cursor: pointer;

  &--active,
  &--active:hover {
    color: #b672ff;
    border-color: #b672ff;
  }
`;
export const FilterOpen = styled.div`
padding: 32px;
box-sizing: border-box;
position: absolute;
top: 50px;
left: 0;
border-radius: 12px;
background: #313131;
min-width: 269px;

}
`;

export const FilterOpenList = styled.ul`
  max-height: 212px;
  max-width: 242px;
  overflow-y: auto;
  scrollbar-width: 2px;
  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background-color: #4b4949;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: white;
    height: auto;
  }
`;

export const FilterOpenListItem = styled.li`
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  padding: 10px;
  &:hover {
    color: #b672ff;
    text-decoration-line: underline;
  }
`;
