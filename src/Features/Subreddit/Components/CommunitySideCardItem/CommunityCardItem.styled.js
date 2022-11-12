import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Arrow = styled(FaAngleUp)`
  color: #46D160;
  margin-left: 8px;
`;

export const Container = styled.div`

  text-decoration: none;
  position: relative;
  min-height: 48px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  transition: 0.3s;
  border-bottom: 1px solid ${({ theme }) => theme.lineColor.primary};
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
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
  margin: 0 8px;
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

