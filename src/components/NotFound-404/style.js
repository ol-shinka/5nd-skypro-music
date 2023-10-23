import { styled } from "styled-components";

export const NotFoundBlock = styled.div`
  margin-top: 285px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const NotFoundBlockTitle = styled.h3`
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: StratosSkyeng;
  font-size: 160px;
  font-style: normal;
  font-weight: 400;
  line-height: 168px;
`;
export const NotFoundBlockItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const NotFoundBlockItemTitle = styled(NotFoundBlockTitle)`
  font-size: 32px;
  line-height: 40px;
  font-family: "StratosSkyeng", sans-serif;
`;

export const NotFoundBlockText = styled.p`
  color: #4e4e4e;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.054px;
`;
export const NotFoundBlockButton = styled.button`
  border: none;
  outline: none;
  width: 278px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--palette-purple-90, #580ea2);
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.054px;
  margin-top: 36px;
  &:hover {
    background-color: #3f007d;
  }

  &:active {
    background-color: #271a58;
  }
`;
