import styled from "styled-components";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.background.primary};
  border-bottom: 1px solid ${({ theme }) => theme.lineColor.primary};
  border-top: 1px solid ${({ theme }) => theme.lineColor.primary};
  height: 39px;
  text-transform: uppercase;
  width: 100%;
`;

export const InnerContainer = styled.div`
  display: flex;
  height: 40px;
  ${({ where }) => (where ? `padding-left: 20px;` : ``)}
  margin: ${({ where }) => (where ? "0" : "auto")};
  align-items: center;
  justify-content: space-evenly;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* width: 100%; */
  text-decoration: none;
  color: ${({ theme }) => theme.color.primary};
  font-size: 14px;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease-in-out;
  margin: 0 5px;
  padding: 0 8px;
  white-space: nowrap;
  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.btnColor.primary};
  }
  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.btnColor.primary};
  }

  &.down-vote {
    @media (max-width: 680px) {
      display: none;
    }
  }

  &.up-vote {
    @media (max-width: 630px) {
      display: none;
    }
  }

  &.hidden {
    @media (max-width: 540px) {
      display: none;
    }
  }

  &.saved {
    @media (max-width: 465px) {
      display: none;
    }
  }

  &.history {
    @media (max-width: 400px) {
      display: none;
    }
  }

  &.comments {
    @media (max-width: 315px) {
      display: none;
    }
  }

  &.posts {
    @media (max-width: 210px) {
      display: none;
    }
  }
  
  &.overview {
    @media (max-width: 100px) {
      display: none;
    }
  }

`;

export const DotsDropdown = styled(Dropdown)`
  @media (min-width: 680px) {
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
      /* background-color: ${({ theme }) => theme.button.muted}; */
      /* border-radius: 20px; */
      /* color: ${({ theme }) => theme.btnColor.primary}; */
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
      color: ${({ theme }) => theme.color.titleText_of_link};

      :hover {
        color: ${({ theme }) => theme.btnColor.primary};
      }
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
    /* margin-left: -8px; */
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
        background-color: ${({ theme }) => theme.background.comment};
        color: ${({ theme }) => theme.color.primary};
      }
      &.active {
        color: ${({ theme }) => theme.btnColor.primary};
      }

      &.down-vote {
        @media (min-width: 680px) {
          display: none;
        }
      }

      &.up-vote {
        @media (min-width: 630px) {
          display: none;
        }
      }

      &.hidden {
        @media (min-width: 540px) {
          display: none;
        }
      }

      &.saved {
        @media (min-width: 465px) {
          display: none;
        }
      }

      &.history {
        @media (min-width: 400px) {
          display: none;
        }
      }

      
      &.comments {
        @media (min-width: 315px) {
          display: none;
        }
      }

      &.posts {
        @media (min-width: 210px) {
          display: none;
        }
      }

      &.overview {
        @media (min-width: 100px) {
          display: none;
        }
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
