// Import styled from styled-components
import styled from "styled-components";

// Import bootstrap components
import Tab from "react-bootstrap/Tab";
import { Col, Dropdown, Row } from "react-bootstrap";

// Import react-router-dom components
import { NavLink } from "react-router-dom";

export const DropdownMenu = styled(Dropdown.Menu)`
  width: 100%;
  overflow: auto;
  height: 80vh;
`;
export const StyledDropdown = styled(Dropdown)`
  display: none !important;
  @media (max-width: 933px) {
    display: block !important;
  }
  color: ${({ theme }) => theme.color.primary};
  z-index: 25;
  top: 89px;
  position: sticky;
  width: 98%;
  margin: auto;
`;

export const DropdownToggle = styled(Dropdown.Toggle)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.secondary};
  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
  }
`;
export const TabContainer = styled(Tab.Container)`
  .row {
    overflow: auto;
    padding-top: 16px;
    padding-bottom: 32px;
    position: fixed;
    top: 88px;
    width: 280px;
    z-index: 30;
  }
`;
export const TabsCol = styled(Col)`
  @media (max-width: 933px) {
    display: none;
  }
  overflow: auto;
  padding-top: 16px;
  padding-bottom: 32px;
  padding-right: 0;
  padding-left: 0;
  position: fixed;
  top: 88px;
  width: 280px;
  height: calc(100vh - 88px);
  z-index: 30;
  background-color: ${({ theme }) => theme.background.lightMuted};
`;

export const ContentCol = styled(Col)`
  @media (max-width: 933px) {
    padding-left: 0;
  }
  padding-left: 280px;
  padding-right: 0;
  margin-top: 40px;
  /* position: fixed; */
  /* top: 88px; */
  min-height: calc(100vh - 89px);
  width: 100%;
  background-color: ${({ theme }) => theme.canvas};
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  align-items: center;
  border-left: 4px solid transparent;
  display: flex;
  flex-direction: row;
  padding: 8px 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme, selected }) =>
    selected ? theme.lineColor.primary : theme.background.lightMuted};
  border-left: 4px solid
    ${({ theme, selected }) =>
      selected ? theme.color.secondary : theme.background.lightMuted};
  &:hover {
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.lineColor.primary};
    border-left: 4px solid
      ${({ theme, selected }) =>
        selected ? theme.color.secondary : theme.lineColor.primary};
  }
  display: flex;
  justify-content: space-between;
`;
export const CategoryTitle = styled.div`
  margin-top: ${({ first }) => (first ? "0" : "16px")};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  align-items: center;
  display: flex;
  padding: 8px 24px;
  color: ${({ theme }) => theme.color.muted};

  span {
    display: inline-block;
    margin-left: 4px;
  }
`;

export const BackButton = styled(NavLink)`
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.5px;
  align-items: center;
  display: flex;
  padding: 0 24px 10px;
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.color.primary};
    cursor: pointer;
  }
  span {
    display: inline-block;
  }
`;

export const StyledRow = styled(Row)`
  margin: 0;
`;
