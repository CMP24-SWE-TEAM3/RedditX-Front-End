import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
export const CancelButton = styled.button`
  &:hover {
    border-color: rgba(135, 138, 140, 0.8);
    color: rgba(135, 138, 140, 0.8);
  }
  margin-left: 8px;
  min-width: 100px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.link};
  color: ${({ theme }) => theme.color.link};
  fill: ${({ theme }) => theme.color.link};
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  padding: 4px 16px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  width: auto;
  background: transparent;
  &:disabled,
  &:focus:disabled,
  &:hover:disabled,
  &:active:disabled {
    border-color: #ccc;
    color: #666666;
    cursor: not-allowed;
  }
`;
export const DeleteButton = styled.button`
  &:hover {
    background-color: rgba(234, 0, 39, 0.8);
    border-color: rgba(234, 0, 39, 0.8);
    color: #fff;
  }
  margin-left: 8px;
  min-width: 100px;
  position: relative;
  border: none;
  background-color: ${({ theme }) => theme.color.link};
  color: ${({ theme }) => theme.background.primary};
  fill: ${({ theme }) => theme.background.primary};
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  padding: 4px 16px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  width: auto;
  &:disabled,
  &:focus:disabled,
  &:hover:disabled,
  &:active:disabled {
    background: #ccc;
    border-color: #ccc;
    color: #666666;
    cursor: not-allowed;
  }
`;
export const StyledModal = styled(Modal)`
  /* max-width: 538px;
  min-width: 410px; */
  & .modal-footer {
    border-top: none;
    border-bottom: none;
    background-color: ${({ theme }) => theme.lineColor.primary};
    border-top: 1px solid ${({ theme }) => theme.lineColor.primary};
  }
  & .modal-header {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    padding: 16px;
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.background.primary};
  }
  & .modal-title {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
  & .modal-body {
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.background.primary};
  }
`;
