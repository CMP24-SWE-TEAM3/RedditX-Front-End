import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.borderColor.secondary};
  border-radius: 4px;
  box-sizing: border-box;
  flex-flow: row nowrap;
  margin-bottom: 16px;
  padding: 10px 12px;
`;

export const InnerContainer = styled.div`
  @media (max-width: 675px) {
    display: none;
  }
  align-items: center;
  cursor: pointer;
  display: flex;

  a.icon {
    display: inline-flex;
    text-decoration: none;
    text-transform: capitalize;
    margin-right: 8px;
    position: relative;
    border: 1px solid transparent;
    padding: 6px 8px;
    border-radius: 20px;
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    text-align: center;
    width: auto;
  }

  a.active {
    background-color: ${({ theme }) => theme.background.active};
    color: ${({ theme }) => theme.color.secondary};

    .fire-icon {
      color: ${({ theme }) => theme.color.secondary};
    }

    .fire-txt {
      color: ${({ theme }) => theme.color.secondary};
    }
  }

  a:hover {
    background-color: #ececec;
    border-radius: 20px;
  }

  .fire-icon {
    display: inline-block;
    padding: 0 8px 0 0;
    height: 20px;
    width: 20px;
    font-size: 20px;
    line-height: 20px;
    font-weight: 400;
    flex: 0 0 auto;
    color: ${({ theme }) => theme.borderColor.primary};
  }

  .fire-txt {
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 18px;
    max-height: 54px;
    display: flow-root;
    display: inline-box;
    line-clamp: 3;
    white-space: normal;
    box-orient: vertical;
    text-align: left;
    text-transform: unset;
    letter-spacing: unset;
    color: ${({ theme }) => theme.borderColor.primary};
  }
`;

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

  a.dropdown-item.active {
    color: ${({ theme }) => theme.color.secondary};
    background-color: ${({ theme }) => theme.background.primary};
    :hover {
      background-color: #e9f5fd;
      color: ${({ theme }) => theme.color.secondary};
    }
  }

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
      background-color: #e9f5fd;
      color: ${({ theme }) => theme.color.primary};
    }
    .active {
      color: ${({ theme }) => theme.color.secondary};
      background-color: ${({ theme }) => theme.background.primary};
      :hover {
        background-color: #e9f5fd;
        color: ${({ theme }) => theme.color.secondary};
      }
    }
    :hover {
      background-color: #e9f5fd;
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

export const DotsDropdown = styled(Dropdown)`
  @media (max-width: 675px) {
    display: none;
  }
  /* border: 1px solid red; */
  align-items: center;
  cursor: pointer;
  display: flex;
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;

  .dropdown-toggle::after {
    content: none;
  }

  background-color: transparent;

  button.btn-primary {
    display: inline-block;
    background-color: transparent;
    border-radius: 20px;
    outline: none;
    padding: 5px;
    border: 1px solid transparent;

    :hover {
      background-color: ${({ theme }) => theme.button.muted};
      border-radius: 20px;
    }

    :focus-visible {
      box-shadow: none;
    }

    :active {
      background-color: transparent;
      border: 1px solid transparent;
    }

    span {
      font-size: 20px;
      font-weight: 400;
      height: 10px;
      line-height: 20px;
      vertical-align: middle;
      color: ${({ theme }) => theme.borderColor.primary};
    }
  }

  div.dropdown-menu {
    border: 1px solid var(--newCommunityTheme-line);
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(28, 28, 28, 0.2);
    color: ${({ theme }) => theme.color.primary};
    overflow: hidden;
    background-color: ${({ theme }) => theme.background.primary};
    min-width: 100px;
    margin-left: -8px;
    padding: 2px;

    a {
      color: ${({ theme }) => theme.borderColor.primary};
      background-color: transparent;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 18px;
      max-height: 54px;
      white-space: normal;
      text-decoration: none;
      padding: 8px;
      text-transform: capitalize;
      font-size: 15px;
      font-weight: 500;

      :hover,
      :focus {
        background-color: #e9f5fd;
        color: ${({ theme }) => theme.color.primary};
      }
    }
    span.icon {
      margin-right: 6px;
    }
    span.text {
      display: inline-block;
    }
  }
`;

export const DateDiv = styled.div`
  padding: 0;
  margin: 0;
  border: 0;
  display: flex;

  @media (max-width: 675px) {
    display: none;
  }
`;

export const DropDateDiv = styled.div`
    padding: 0;
  margin: 0;
  border: 0;
  display: none;

  @media (max-width: 675px) {
    display: flex;
  }
`;
