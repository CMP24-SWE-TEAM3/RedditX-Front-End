import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NewBtn = styled.button`
  width: 75.36px;
  height: 32px;
  border: none;
  display: inline-flex;
  position: relative;
  top: 0;
  left: 0;
  background-color: ${({ theme, clickedBtn }) =>
    clickedBtn === "3"
      ? theme.background.post_background
      : theme.background.primary};
  color: ${({ theme, clickedBtn }) =>
    clickedBtn === "3" ? theme.btnColor.primary : theme.color.muted};
  border-radius: 20px;

  &:hover {
    background-color: ${(props) => props.theme.background.muted};
  }
  @media (max-width: 1010px) {
    display: none;
  }
`;
export const Word = styled.span`
  padding-left: 4px;
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 18px;
  max-height: 54px;
  white-space: normal;
  text-align: left;
  padding-top: 6px;
`;
export const NavLinkBtn = styled(NavLink)`
  text-decoration: none;
`;
