import styled from "styled-components";
// import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
export const StyledDropdown = styled(DropdownButton)`
  display: none;
  transition: 0.3s;
  
  @media (max-width: 700px) {
    display: block;
  }
  & button {
    padding: 12px 20px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 0;
    border: none;
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.background.active};
    color: ${({ theme }) => theme.color.titleText_of_link};
  }
  & button:hover {
    background-color: ${({ theme }) => theme.background.fill};
    color: ${({ theme }) => theme.color.titleText_of_link};
  }

  .dropdown-item {
    margin-bottom: 7px;
  }

  .dropdown-item.active {
    background-color: ${({ theme }) => theme.background.muted};
    color: ${({ theme }) => theme.color.titleText_of_link};
  }
  .dropdown-menu.show {
    background-color: ${({ theme }) => theme.background.active};
  }
  .dropdown-item {
    color: ${({ theme }) => theme.color.titleText_of_link};
  }
  .dropdown-item:hover {
    background-color: ${({ theme }) => theme.background.muted};
  }
`;