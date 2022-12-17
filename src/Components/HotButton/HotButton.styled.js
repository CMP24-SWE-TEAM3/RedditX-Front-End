import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HotBtn = styled(NavLink)`
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
  color: ${({ theme }) => theme.color.muted};
  background-color: ${({ theme }) => theme.background.primary};

  &:hover {
    background-color: ${({ theme }) => theme.background.muted};
  }

  &.active {
    background-color: ${({ theme }) => theme.background.post_background};
    color: ${({ theme }) => theme.btnColor.primary};
    &:hover {
      background-color: ${({ theme }) => theme.background.muted};
    }
  }
  text-decoration: none;
`;
export const Word = styled.span`
  font-weight: 700;
`;
