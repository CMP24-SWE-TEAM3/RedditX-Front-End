import styled from "styled-components";
import DropdownMenu from "react-bootstrap/DropdownMenu";

export const DropDownMenuStyled = styled(DropdownMenu)`
  position: absolute;
  background-color: ${({ theme }) => theme.background.primary};
  border: 1px solid white;
  border-radius: 0 0 4px 4px;
  box-sizing: border-box;
  height: 482px;
  overflow: hidden scroll;
  -ms-flex-direction: column;
  flex-direction: column;
  left: 0;
  bottom: 0;
  right: 0;
  margin-top: 3px;
  width: 270px;
  @media (max-width: 768px) {
    position: fixed;
    top: 49px !important;
    width: 100vw;
    z-index: 30;
  }

  ul {
    padding-top: 10px;
  }

  .form-control {
    background-color: ${({ theme }) => theme.background.post_background};
    border: 1px solid ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.primary};
    height: 30px;
    margin: 16px 16px 0;
    outline: none;
    padding: 0 6px;
    box-sizing: border-box;
    border-radius: 0;
    width: calc(100% - 32px);
  }

  .form-control:focus {
    border-color: ${({ theme }) => theme.color.secondary} !important;
    box-shadow: none;
  }
`;
