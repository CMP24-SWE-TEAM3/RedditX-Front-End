// Import styled
import styled from "styled-components";

// Import bootstrap components
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";

export const StyledTabs = styled.div`
  margin-top: 10px;
`;

export const NavLink = styled(Nav.Link)`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.muted};
  background-color: ${({ theme }) => theme.background.primary};
  width: 100%;
  height: 100%;
  white-space: nowrap;
  border-bottom: 5px solid ${({ theme }) => theme.background.primary};
  &:hover {
    color: ${({ theme }) => theme.color.muted};
    background-color: ${({ theme }) => theme.button.hoverLight};
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  span {
    margin-left: 5px;
    @media (max-width: 305px) {
      display: none;
    }
  }
`;

export const NavItem = styled(Nav.Item)`
  background-color: ${({ theme }) => theme.background.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 10px 10px 0 0;
  & .active.nav-link {
    color: ${({ theme }) => theme.color.secondary};
    background-color: ${({ theme }) => theme.background.primary};
    border-bottom: 3px solid ${({ theme }) => theme.color.secondary};
  }
  a.nav-link {
    border-left: none;
    border-right: none;
    border-top: none;
  }
`;

export const Column = styled(Col)`
  background-color: ${({ theme }) => theme.background.primary};
  padding: 0;
  border-radius: 10px;
`;

export const NavContainer = styled(Nav)`
  border-radius: 10px;
  height: fit-content;
`;
