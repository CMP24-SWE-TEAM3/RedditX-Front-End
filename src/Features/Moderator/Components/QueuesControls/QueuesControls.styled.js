import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const DropdownToggle = styled(Dropdown.Toggle)`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-transform: uppercase;
  margin-right: 12px;
  align-items: center;
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  display: flex;
  background-color: transparent;
  border: none;
  padding: 0;
  &:hover {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const DropdownMenu = styled(Dropdown.Menu)`
  margin: 0;
  padding: 0;
  border: 0;
`;

export const DropdownItem = styled(Dropdown.Item)`
  padding: 8px;
  color: ${({ theme, selected }) =>
    selected ? theme.color.secondary : theme.color.muted};
  &:hover {
    background-color: ${({ theme }) => theme.button.hoverLight};
    color: ${({ theme, selected }) =>
      selected ? theme.color.secondary : theme.color.primary};
  }
`;
