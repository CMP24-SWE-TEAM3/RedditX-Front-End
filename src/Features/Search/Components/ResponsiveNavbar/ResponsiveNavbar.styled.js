import styled from "styled-components";
// import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
export const StyledDropdown = styled(DropdownButton)`
  display: none;
  transition: 0.3s;
  @media (max-width: 635px) {
    display: block;
  }
  & button {
    /* background-color: transparent; */
    background-color: ${({ theme }) => theme.background.active};

    padding: 12px 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.titleText_of_link};
    /* color: #1a1a1b; */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    border-radius: 9999px;
    width: auto;
    border: none;
    outline: none;
    cursor: pointer;
    letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
    min-height: 32px;
    min-width: 32px;
  }
  & button:hover {
    background-color: ${({ theme }) => theme.background.fill};
    color: ${({ theme }) => theme.color.titleText_of_link};
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
