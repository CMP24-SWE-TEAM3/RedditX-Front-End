import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";

export const DropDownLeftStyled = styled(Dropdown)`
  & h6 {
    display: inline;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    color: ${({ theme }) => theme.color.primary};
    /* @media only screen and (max-width: 990px) {
      display: none;
    } */
  }

  .home-ico {
    position: relative;
    span:first-child {
      padding-right: 10px;
    }
  }
  border-radius: 4px;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  height: 36px;
  left: 0;
  line-height: 34px;
  bottom: 0;
  width: 100%;
  position: relative;
  text-align: left;
  text-overflow: ellipsis;
  top: 0;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.background.primary};

  &:hover {
    border: 1px solid ${({ theme }) => theme.background.muted} !important;
  }

  color: ${({ theme }) => theme.color.primary};

  .all-drop {
    border-radius: 4px 4px 0 0;
    border-color: ${({ theme }) => theme.lineColor.primary};
    display: flex;
    justify-content: flex-start;
  }

  a:hover {
    color: ${({ theme }) => theme.color.primary};
  }

  // down form ico
  .down-form {
    svg {
      polyline {
        stroke: ${({ theme }) => theme.color.primary} !important;
        stroke-width: 1;
      }
    }

    /* @media (max-width: 890px) {
      display: none;
    } */
  }
`;
