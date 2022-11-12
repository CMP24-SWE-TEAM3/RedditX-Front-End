import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Arrow = styled(FaAngleUp)`
  position: absolute;
  left: 52px;
  color: ${({ up }) => (up ==='true'? "#46D160" : "#EA2700")};
  transform: ${({ up }) => (up ==='true'? "none" : "rotate(180deg)")};
`;

export const CommunityItem = styled.div`
  transition: 0.3s;
  text-decoration: none;
  position: relative;
  min-height: 64px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  

  /*Can be put in another container to fix media queries for this part*/
  // justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.lineColor.primary};
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;

  .join-btn {
    position: absolute;
    transition: 0.3s;
    // left: 80.75%;
    right: 13%;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 16px;
    text-transform: unset;
    min-height: 24px;
    width: 60px;
    padding: 4px 16px;
    border-radius: 9999px;
    border: none;
    color: ${({ theme }) => theme.btnColor.text};
    background-color: ${({ theme }) => theme.btnColor.primary};
    cursor: pointer;
  }

  .join-btn:hover {
    opacity: 0.7;
  }

  .joined-btn {
    position: absolute;
    transition: 0.3s;
    // left: 80%;
    right: 13%;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 16px;
    text-transform: unset;
    min-height: 24px;
    width: 72px;
    padding: 4px 16px;
    border-radius: 9999px;
    border: 1px solid ${({ theme }) => theme.btnColor.secondary};
    background-color: ${({ theme }) => theme.btnColor.backColor};
    color: ${({ theme }) => theme.btnColor.secondary};
    cursor: pointer;
  }

  .joined-btn:hover span {
    display: none;
  }

  .joined-btn:hover:before {
    content: "Leave";
  }
`;

export const CommunityA = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const CommunityIndex = styled.span`
  color: ${({ theme }) => theme.color.primary};
  transition: 0.3s;
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
  color: ${({ theme }) => theme.color.primary};
  transition: 0.3s;
  font-weight: 500;
  margin-top: revert;

  &:hover + div {
    display: inline-block;
  }
`;

export const CommunityRankChange = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  position: absolute;
  right: 4%;
  color: ${({ theme }) => theme.color.primary};
  transition: 0.3s;
`;

export const CommunityCard = styled.div`
  display: none;
  position: absolute;
  transition: 0.3s;
  max-width: 380px;
  min-width: 240px;
  padding: 5px;
  border-color: ${({ theme }) => theme.lineColor.secondary};
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  font-size: 11px;
  line-height: 16px;
  background-color: ${({ theme }) => theme.background.primary};
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

export const HoverTitle = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  align-items: center;
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const MembersOnline = styled.div`
  display: flex;
  padding: 12px 0;
  width: 100%;
  align-content: center;
`;

export const Members = styled.div`
  flex: 1 0 auto;
  border-right: 1px solid ${({ theme }) => theme.lineColor.primary};
  transition: 0.3s;
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
  transition: 0.3s;
  color: ${({ theme }) => theme.color.primary};
  overflow-wrap: break-word;
  padding: 8px 0;
  width: 100%;
`;

export const HoverH4 = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme }) => theme.color.primary};
  transition: 0.3s;
`;

export const HoverP = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.color.muted};
  transition: 0.3s;
`;

export const HoverButton = styled.button`
  position: relative;
  background-color: ${({ theme }) => theme.color.secondary};
  border: none;
  color: ${({ theme }) => theme.background.primary};
  fill: ${({ theme }) => theme.background.primary};
  transition: 0.3;
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
