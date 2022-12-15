import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Body = styled.div`
  font: normal x-small verdana, arial, helvetica, sans-serif;
`;
export const HeadPrimary = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  border-bottom: none;
  margin: 0;
  padding: 0;
`;
export const HeadPrimaryMargin = styled.div`
  margin: 0 20px 0 100px;
  @media screen and (max-width: 850px) {
    margin-left: 5px;
  }
`;

export const HeadPrimaryUL = styled.ul`
  font-size: larger;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
  white-space: nowrap;
  display: inline-block;
  vertical-align: bottom;
`;

export const PrimaryLinks = styled(NavLink)`
  display: inline-block;
  padding: 0 10px;
  font-size: larger;
  opacity: 0.8;
  background-color: transparent;
  color: ${({ theme }) => theme.lineColor.primary};
  text-transform: capitalize;
  border: none;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.lineColor.primary};
  }
  &.active {
    color: #80bce9;
    opacity: 1;
  }
`;
export const PrimaryLI = styled.li`
  display: inline;
  font-weight: bold;
  margin: 0px 3px;
`;

export const HeadSecondary = styled.div`
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.color.secondary};
  border-bottom: none;
`;
export const HeadSecondaryMargin = HeadPrimaryMargin;

export const HeadSecondaryUL = styled.ul`
  margin-left: 5px;
  display: inline;
  list-style: none;
  padding: 0;
`;

export const SecondaryLI = styled.li`
  display: inline;
  white-space: nowrap;
`;
export const SecondaryLink = styled(NavLink)`
  display: inline-block;
  margin: 0 10px;
  padding: 0 10px 5px;
  color: ${({ theme }) => theme.lineColor.primary};
  border-bottom: 2px transparent solid;
  background-color: transparent;
  text-transform: capitalize;
  font-size: larger;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.lineColor.primary};
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom-color: ${({ theme }) => theme.background.primary};
  }
  &.active {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom-color: ${({ theme }) => theme.background.primary};
  }
`;
