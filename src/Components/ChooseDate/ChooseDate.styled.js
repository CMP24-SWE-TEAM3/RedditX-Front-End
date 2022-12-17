import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

export const StyledDrop = styled(Dropdown)`
  display: none;
  @media (max-width: 675px) {
    display: flex;
  }
  align-items: center;
  cursor: pointer;

  border-radius: 20px;
  margin-right: 8px;
  padding: 6px 8px;
  background-color: ${({ theme }) => theme.button.muted};

  button.dropdown-toggle.btn.btn-primary {
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 20px;
    text-transform: unset;
    padding: 0 8px;
    color: ${({ theme }) => theme.color.secondary};
    margin: 0;
    outline: none;
    display: flex;
    background-color: ${({ theme }) => theme.button.muted};
    border: none;
    ::after {
      content: none;
    }

    span.icon {
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 18px;
      max-height: 54px;
      white-space: normal;
      margin-right: 6px;
      font-size: 20px;
      font-weight: 400;
      height: 20px;
      line-height: 16px;
      vertical-align: middle;
      width: 20px;
    }

    span.text {
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 21px;
      max-height: 54px;
      white-space: normal;
    }

    span.arrow {
      font-size: 20px;
      font-weight: 400;
      height: 20px;
      line-height: 20px;
      width: 20px;
      margin-right: -4px;
    }
  }

  div.dropdown-menu {
    border: 1px solid ${({ theme }) => theme.lineColor.primary};
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(28, 28, 28, 0.2);
    color: ${({ theme }) => theme.color.primary};
    overflow: hidden;
    background-color: ${({ theme }) => theme.background.primary};
    margin-left: -5px;
    min-width: 100px;
    padding: 0;
    @media (max-width: 460px) {
      flex-wrap: wrap;
    }
    /*z-index: 10; */
  }
  div.dropdown-menu.show {
    display: flex;
  }

  button.dropdown-item.active,
  a.dropdown-item.active {
    color: ${({ theme }) => theme.color.secondary};
    background-color: ${({ theme }) => theme.background.primary};
    :hover {
      background-color: ${({ theme }) => theme.background.comment};
      color: ${({ theme }) => theme.color.secondary};
    }
  }

  button.dropdown-item,
  a.dropdown-item {
    box-sizing: border-box;
    padding: 8px;
    overflow: hidden;
    font-weight: 500px;
    color: ${({ theme }) => theme.borderColor.primary};
    line-height: 18px;
    max-height: 54px;
    width: auto;
    padding-bottom: 6px;

    :hover,
    :focus-within {
      background-color: ${({ theme }) => theme.background.comment};
      color: ${({ theme }) => theme.color.primary};
    }
    .active {
      color: ${({ theme }) => theme.color.secondary};
      background-color: ${({ theme }) => theme.background.primary};
      :hover {
        background-color: ${({ theme }) => theme.background.comment};
        color: ${({ theme }) => theme.color.secondary};
      }
    }
    :hover {
      background-color: ${({ theme }) => theme.background.comment};
      color: ${({ theme }) => theme.color.primary};
    }

    span.icon {
      display: inline-block;
      margin-right: 6px;
      font-size: 20px;
      font-weight: 400;
      height: 22px;
      line-height: 5px;
      vertical-align: middle;
      width: 20px;
    }
    span.text {
      display: inline-block;
    }
  }
`;
