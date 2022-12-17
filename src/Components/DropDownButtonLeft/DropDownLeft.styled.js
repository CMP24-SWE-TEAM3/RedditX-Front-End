import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";

export const DropDownLeftStyled = styled(Dropdown)`
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
  color: ${({ theme }) => theme.color.primary};

  &:hover {
    border: 1px solid ${({ theme }) => theme.background.muted} !important;
  }

  a:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;
export const DropContainer = styled.div`
  border-radius: 4px 4px 0 0;
  border-color: ${({ theme }) => theme.lineColor.primary};
  display: flex;
  justify-content: flex-start;
`;
export const Icon = styled.div`
  position: relative;
  span:first-child {
    padding-right: 10px;
  }
`;
export const DownForm = styled.span`
  svg {
    polyline {
      stroke: ${({ theme }) => theme.color.primary} !important;
      stroke-width: 1;
    }
  }
`;
export const Header = styled.h6`
  display: inline;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  color: ${({ theme }) => theme.color.primary};
  @media only screen and (max-width: 990px) {
    display: none;
  }
`;
