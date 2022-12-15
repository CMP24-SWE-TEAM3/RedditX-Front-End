import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

export const ModalContainer = styled(Modal)`
  /* max-width: 392px; */
  min-width: 410px;
  margin-top: 220px;

  .modal-header {
    border-bottom: 1px solid ${({ theme }) => theme.lineColor.primary} !important;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    padding: 16px;
  }
  .modal-title {
    font-weight: 500;
    display: flex;
    flex-direction: row;
    color: black;
    flex: 1 1 100%;
    width: 100%;
  }
  .h4 {
    font-size: inherit !important;
  }
  .modal-body {
    color: ${({ theme }) => theme.categoryColor.text} !important;
    font-size: 14px;
    line-height: 18px;
    padding: 16px;
  }
  .modal-footer {
    background-color: ${({ theme }) => theme.lineColor.primary} !important;
    border-top: 1px solid ${({ theme }) => theme.lineColor.primary} !important;
    display: flex;
    justify-content: flex-end;
    padding: 16px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .btn-close:focus {
    box-shadow: none !important;
  }
`;
export const ButtonModal = styled.button`
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  position: relative;
  background-color: ${({ theme, show }) =>
    show ? theme.btnColor.primary : theme.lineColor.primary};
  border: 1px solid ${({ theme }) => theme.btnColor.primary};
  color: ${({ theme, show }) =>
    show ? theme.lineColor.primary : theme.btnColor.primary};
  fill: ${({ theme }) => theme.btnColor.primary};
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  width: auto;
  :hover {
    background-color: ${({ theme, show }) =>
      show
        ? theme.background.hover_background_button_blue
        : theme.borderColor.sideBtnHover};
  }
`;
