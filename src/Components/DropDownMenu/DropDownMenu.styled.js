import styled from "styled-components";

export const DropdownContainer = styled.div`
  .ico {
    height: 20px;
    width: 20px;
    border-radius: 100%;
    vertical-align: middle;
  }

  .community {
    //padding: 8px 24px;
    position: relative;
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  .word {
    flex-grow: 1;
    margin-left: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }


  span {
    flex-grow: 0;
    height: 20px;
    max-height: 20px;
    margin-right: 5px;
    max-width: 20px;
    width: 20px;
  }

  .right-span {
    margin-left: 8px;
  }

  .feed {
    padding: 16px 24px 8px;
    color: #878a8c;
    font-size: 10px;
    font-weight: 500;
    line-height: 16px;
    text-transform: uppercase;
  }

  .dropdown-item {
    padding: 8px 24px;
    position: relative;
    text-decoration: none;

    :active {
      background-color: unset !important;

    }
  }

  .form-control {
    background-color: ${({theme}) => theme.background.post_background};
    border: 1px solid ${({theme}) => theme.color.secondary};
    color: ${({theme}) => theme.color.primary};
    height: 30px;
    margin: 16px 16px 0;
    outline: none;
    padding: 0 6px;
    box-sizing: border-box;
    border-radius: 0;
    width: calc(100% - 32px);
  }

  .form-control:focus {
    border-color: ${({theme}) => theme.color.secondary} !important;
    box-shadow: none;
  }

  .dropdown-menu {
    background-color: ${({theme}) => theme.background.post_background};
    border: 1px solid white;
    border-radius: 0 0 4px 4px;
    box-sizing: border-box;
    transform: none !important;
    margin-top: -1px;
    height: 100%;
    min-height: 100%;
    overflow: hidden scroll;
    position: fixed;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    left: 0;
    bottom: 0;
    right: 0;
    top: 48px;
    width: 270px;
  }
`