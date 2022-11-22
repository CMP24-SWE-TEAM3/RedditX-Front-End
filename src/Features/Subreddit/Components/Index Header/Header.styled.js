import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderMarginDiv = styled.div`
  background-color: ${({theme})=>theme.background.primary};
  width: 100%;
`;


export const HeaderDiv = styled.div`
  max-width: 986px;
  background-color: ${({theme})=>theme.background.primary};
  margin: 0 auto;
  padding: 16px;
`;

export const HeaderH3 = styled.h3`
  color: ${({theme})=>theme.color.primary};
  padding-bottom: 6px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  margin: 0;
  text-transform: capitalize;
`;

export const LettersContainer = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  cursor: default;
  margin: 8px 0 4px;
`;

export const Letters = styled(NavLink)`
  color: ${({theme})=>theme.color.secondary};
  display: inline-block;
  margin-right: 8px;
  text-decoration: none;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    margin: 20px;
  }

  &:hover {
    color: ${({theme})=>theme.color.btnHover};
  }

  &.active {
    color: ${({theme})=>theme.color.primary};
  }
`;
