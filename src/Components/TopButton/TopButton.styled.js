import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TopBtn = styled(NavLink)`
  display: inline-flex;
  position: relative;
  width: 68.66px;
  border: none;
  height: 32px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  padding: 6px 8px;
  margin: auto 10px auto 3px;
  border-radius: 1.5em;
  color: ${({ theme }) => theme.color.muted};
  background-color: ${({ theme }) => theme.background.primary};

  :hover {
    background-color: ${({ theme }) => theme.background.muted};
  }

  &.active {
    background-color: ${({ theme }) => theme.background.post_background};
    color: ${({ theme }) => theme.btnColor.primary};
    :hover {
      background-color: ${({ theme }) => theme.background.muted};
    }
  }
  text-decoration: none;
`;

export const Word = styled.span`
  padding-left: 6px;
  font-weight: 700;
`;
