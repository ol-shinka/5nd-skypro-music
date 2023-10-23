import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(24, 24, 24, 1);
  overflow-y: scroll;
  overflow-x: hidden;
  
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #4b4949;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: white;
    height: 30px;
  }
`;
export const Container = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`;

export const Main = styled.main`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
