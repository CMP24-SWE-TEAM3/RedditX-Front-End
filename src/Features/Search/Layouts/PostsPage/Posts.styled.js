import styled from "styled-components";
// import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
export const ContainerPosts = styled.div`
  & .subnav {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 4px;
  }

  & .time {
    margin-left: 4px;
  }
  & .x {
    width: 100%;
    max-width: 100%;
    display: flex;
    padding-top: 8px;
  }
  @media (max-width: 500px) {
    & .x {
      flex-direction: column-reverse;
    }
  }
  & .x .side-cards {
    display: block;

    margin-left: 24px;
    max-width: 312px;
    flex: 0 0 312px;
  }

  @media (max-width: 960px) {
    & .x .side-cards {
      display: none;
    }
  }
  @media (max-width: 500px) {
    & .x .side-cards {
      max-width: 100%;
      display: block;
      margin-left: 0;
    }
  }
`;
export const StyledDropdown = styled(DropdownButton)`
  & button {
    color: ${({ theme }) => theme.color.titleText_of_link};
    display: flex;
    align-items: center;
    /* display: none; */
    outline: none;
    border: none;
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 13px;
    line-height: 16px;
    font-weight: 400;
    min-height: 24px;
    height: 24px;
    padding-left: 12px;
    padding-right: 8px;
    border-radius: 9999px;
    justify-content: center;
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
