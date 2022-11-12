import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const RightSectionContainer = styled.div`
  display: none;
  flex: 0 0 312px;
  margin-left: 24px;
  marign-top: 0;
  width: 312px;
  @media screen and (min-width: 1050px) {
    display: block;
  }
`;

export const RightSectionStylingDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const FirstBlock = styled.div`
  background-color: ${({theme})=>theme.background.primary};
  color:  ${({theme})=>theme.color.primary};
  fill:  ${({theme})=>theme.color.primary};
  border: 1px solid ${({theme})=>theme.linecolor.sideBorder};
  transition: 0.3s;
  border-radius: 4px;
  overflow: visible;
  overflow-wrap: break-word;
  margin-bottom: 16px;
`;

export const RightSectionSticky = styled.div`
  flex: 1 1 auto;
  position: relative;
  width: inherit;
`;

export const SecondBlockWithBrowse = styled.div`
  position: sticky;
  top: 57px;
`;

export const SecondBlock = styled.div`
  transition: 0.3s; 
  background-color: ${({theme})=>theme.background.primary};
  color: ${({theme})=>theme.color.primary};
  fill:  ${({theme})=>theme.color.primary};
  border: 1px solid ${({theme})=>theme.linecolor.sideBorder};
  border-radius: 4px;
  overflow: visible;
  overflow-wrap: break-word;
  margin-top: 16px;
`;

export const Browse = styled.div`
  background-color: ${({theme})=>theme.background.primary};
  color:  ${({theme})=>theme.color.primary};
  fill:  ${({theme})=>theme.color.primary};
  border: 1px solid ${({theme})=>theme.linecolor.sideBorder};
  transition: 0.3s;
  border-radius: 4px;
  overflow: visible;
  overflow-wrap: break-word;
  margin-top: 16px;
  padding: 0;
`;

export const BrowseH3 = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-transform: capitalize;
  padding: 12px 12px 0;
  margin: 0;
`;

export const LettersContainer = styled.div`
  padding: 12px;
`;

export const Letters = styled(NavLink)`
  color: ${({theme})=>theme.color.secondary};
  transition: 0.3s;
  display: inline-block;
  margin-right: 8px;
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    color: ${({theme})=>theme.color.secondary};
    transition: 0.3s;
    opacity: 0.7;
  }
`;

export const BackTop = styled.div`
  top: calc(100vh - 8px);
  position: sticky;
  margin-top: 45px;
  display: flex;
  justify-content: center;
  text-align: center;
  transform: translateY(-100%);
`;

export const RightSectionBtns = styled.a`
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 22px;
  min-width: 32px;
  padding: 5px 16px;
`;

export const BackTopBtn = styled(RightSectionBtns)`
  border-radius: 200px;
  border: 1px solid ${({theme})=>theme.color.secondary};
  color: ${({theme})=>theme.background.primary};
  background-color: ${({theme})=>theme.color.secondary};
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
  scroll-behavior: smooth;

  &:hover {
    color: ${({theme})=>theme.background.primary};
  }
`;
