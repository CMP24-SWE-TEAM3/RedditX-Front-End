import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NewBtn = styled(NavLink)`
  width: 75.36px;
  height: 32px;
  border: none;
  display: inline-flex;
  position: relative;
  top: 0;
  left: 0;
  border-radius: 20px;
  color: ${({ theme }) => theme.color.muted};
  background-color: ${({ theme }) => theme.background.primary};
  &:hover {
    background-color: ${(props) => props.theme.background.muted};
  }
  &.active {
    .un-fill {
      display: none;
    }
    .fill {
      display: initial;
    }
    background-color: ${({ theme }) => theme.background.post_background};
    color: ${({ theme }) => theme.btnColor.primary};
    &:hover {
      background-color: ${({ theme }) => theme.background.muted};
    }
  }
  .fill {
    display: none;
  }
  .un-fill {
    display: initial;
  }
  text-decoration: none;
`;
export const Word = styled.span`
  padding-left: 6px;
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 18px;
  max-height: 54px;
  white-space: normal;
  text-align: left;
  padding-top: 6px;
`;
