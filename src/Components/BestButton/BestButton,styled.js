import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BestBtn = styled(NavLink)`
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
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.background.muted};
  }
  color: ${({ theme }) => theme.color.muted};
  background-color: ${({ theme }) => theme.background.primary};

  &.active {
    background-color: ${({ theme }) => theme.background.post_background};
    color: ${({ theme }) => theme.btnColor.primary};
    &:hover {
      background-color: ${({ theme }) => theme.background.muted};
    }
  }
`;
export const Word = styled.span`
  font-weight: 700;
`;
