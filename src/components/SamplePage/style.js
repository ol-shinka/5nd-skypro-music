import { styled } from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  max-height: 100%;
  height: 100%;
  min-width: 840px;
  scrollbar-width: 4px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #4b4949;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: white;
    height: 65px;
  }
  }
`;
