import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${({ theme }) => theme.background.primary};
  padding: 0 20px 0 20px;
  gap: 2%;
  max-width: 100%;
  width: 100%;
  flex-wrap: wrap;
`;
export const Comment = styled.span`
  color: gray;
  padding: 5px 10px;
  cursor: pointer;
  svg {
    font-size: 24px;
  }

  &:hover {
    background-color: #cccccc2b;
  }
`;

export const CommentCollapse = styled.span`
  color: gray;
  margin: 4px 8px 4px 0;
  padding: 4px;
  cursor: pointer;

  &:hover {
    background-color: #cccccc2b;
  }
`;
export const MyDropdown = styled(Dropdown)`
  .dropdown-menu.show {
    padding: 0;
    overflow: hidden;
    box-shadow: 0px 0px 10px -2px grey;
  }

  .dropdown-item {
    padding-right: 0 !important;
    color: gray;
    display: flex;
    align-items: center;

    span {
      margin: 0;
    }

    &:hover {
      background-color: #5cc0f147;
      color: black !important;
    }
  }

  button {
    background-color: transparent !important;
    border-color: transparent !important;
    color: gray;

    &:after {
      display: none;
    }
  }

  &:hover {
    button {
      background-color: transparent;
      border-color: transparent;
      color: gray;
    }
  }
`;
