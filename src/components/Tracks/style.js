import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

export const blink = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0.2;
  }

`;

export const Skeleton = styled.div`
  animation: ${blink} 2s infinite alternate;
  background-color: #4e4e4e;
  height: 20px;
  width: 300px;
`;
export const SkeletonAlbum = styled(Skeleton)`
  width: 100px;
`;
export const SkeletonSideBar = styled(Skeleton)`
  width: 250px;
  height: 150px;
`;
export const SkeletonPlayBar = styled(Skeleton)`
  width: 50px;
`;

export const ContentPlaylist = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #181818;
`;

export const PlaylistItem = styled.li`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;

export const PlaylistTrack = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const TrackTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 447px;
`;

export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`;

export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;

export const TrackTitleLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`;

export const TrackAuthor = styled.div`
  width: 321px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const TrackAuthorLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`;

export const TrackAlbum = styled.div`
  width: 245px;
`;

export const TrackAlbumLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;

export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`;

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`;

const Pulse = () => css`
  animation: pulse 0.6s ease-in-out infinite both;

  @keyframes pulse {
    0%,
    to {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1);
    }
  }
`;

export const PlayingTrack = styled.div`
  position: relative;
  text-align: center;
  padding: 8px;
  width: 16px;
  height: 16px;
  background-color: #b672ff;
  border-radius: 50%;
  ${(props) => (props.$playing ? Pulse : "")};
`;
