import styled from "styled-components";
import { Link } from "react-router-dom";

export const FollowerContainer = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const FollowerLink = styled(Link)`
  display: inline-block;
  padding: 4px 8px 4px 4px;
  border-radius: 4px;
  color: inherit;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.lineColor.primary};
    color: inherit;
  }
`;

export const NameContainer = styled.div`
  display: inline-block;
  color: inherit;
`;

export const StyledSpan = styled.span`
  height: 32px;
  width: 32px;
  display: inline-block;
  margin-right: 6px;
  vertical-align: middle;

  img {
    width: 100%;
    transform-origin: bottom center;
    display: block;
    transform: scale(1.3);
    border-radius: 100%;
  }
`;

export const FollowButton = styled.button`
  min-width: 112px;
  position: relative;
  background-color: ${({ theme, isFollowing }) =>
    isFollowing ? "transparent" : theme.background.lightMuted};
  border: 1px solid transparent;
  color: ${({ theme, isFollowing }) =>
    isFollowing ? theme.borderColor.primary : theme.color.secondary};
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  padding: 4px 16px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  text-align: center;
  width: auto;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${({ isFollowing }) =>
      isFollowing ? "#ececec" : "#e1ecf4"};
  }
`;
