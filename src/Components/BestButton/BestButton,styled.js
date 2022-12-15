import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BestBtn = styled.button`
  display: inline-flex;
  position: relative;
  width: 70px;
  height: 32px;
  font-size: 14px;
  border: none;
  line-height: 17px;
  font-weight: 700;
  padding: 6px 8px;
  margin-right: 8px;
  border-radius: 1.5em;
  background-color: ${({ theme, clickedBtn }) =>
    clickedBtn === "1"
      ? theme.background.post_background
      : theme.background.primary};

  color: ${({ theme, clickedBtn }) =>
    clickedBtn === "1" ? theme.btnColor.primary : theme.color.muted};

  &:hover {
    background-color: ${({ theme }) => theme.background.muted};
  }
`;
export const Word = styled.span`
  font-weight: 700;
`;
export const NavLinkBtn = styled(NavLink)`
  text-decoration: none;
`;
