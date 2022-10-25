import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa";


export const Arrow = styled(FaAngleUp)`
  position: absolute;
  left: 52px;
  color: ${({up}) => up ? "#46D160" : "#EA2700"};
  transform: ${({up}) => up? "none" : "rotate(180deg)"};
`;

export const CommunityItem = styled.div`
  text-decoration: none;
  position: relative;
  height: 64px;
  padding: 0 24px;
  display: flex;
  align-items: center;

  /*Can be put in another container to fix media queries for this part*/
  justify-content: space-between;
  border-bottom: 1px solid #edeff1;
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
`;

export const CommunityA = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const CommunityIndex = styled.span`
  color: #1c1c1c;
  text-align: right;
  min-width: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const CommunityImg = styled.img`
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 24px;
  box-sizing: border-box;

  flex: none;
  font-size: 32px;
  height: 32px;
  line-height: 32px;
  margin: 0 8px 0 30px;
  width: 32px;
`;

export const TitleParagraph = styled.p`
  color: #1c1c1c;
  font-weight: 500;

  &:hover + div {
    display: inline-block;
  }
`;

export const CommunityRankChange = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #1c1c1c;
`;

export const CommunityCard = styled.div`
  display: none;
  position: absolute;
  max-width: 380px;
  min-width: 240px;
  padding: 5px;
  border-color: #f0f0f0;
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  font-size: 11px;
  line-height: 16px;
  background-color: white;
  z-index: 1;
  left: 70px;
  top: 42px;

  &:hover {
    display: inline-block;
  }
`;

export const ForPadding = styled.div`
  padding: 12px;
`;

export const HoverItem = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ImgTitle = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
`;

export const HoverImg = styled.img`
  flex-shrink: 0;
  height: 32px;
  margin-right: 8px;
  width: 32px;
`;

export const HoverTitle = styled.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  align-items: center;
  color: #1c1c1c;
  display: flex;
`;

export const MembersOnline = styled.div`
  display: flex;
  padding: 8px 0;
  width: 100%;
`;

export const Members = styled.div`
  flex: 1 0 auto;
  border-right: 1px solid #edeff1;
`;

export const Online = styled.div`
  flex: 1 0 auto;
  padding-left: 20px;
`;

export const HoverDescription = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #1c1c1c;
  overflow-wrap: break-word;
  padding: 8px 0;
  width: 100%;
`;

export const HoverH4 = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 2px;
  color: #1c1c1c;
`;

export const HoverP = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 2px;
  color: #7c7c7c;
`;

export const HoverButton = styled.button`
  position: relative;
  background-color: #0079d3;
  border: none;
  color: #ffffff;
  fill: #ffffff;
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  border-radius: 30px;
  width: 90%;
`;
