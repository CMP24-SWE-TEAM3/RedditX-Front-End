import styled from "styled-components";
import Modal from "react-bootstrap/Modal"

export const StyledModal = styled(Modal)`

  margin: 0;
  padding: 0;

  :root {
    --bg-color: ${({ theme }) => theme.background.primary};
    --text-color: ${({ theme }) => theme.background.secondary};
  }
  

  .modal {
    --bs-modal-footer-border-width: 0;
    --bs-modal-header-border-width: 0;
    line-height: 1;
    font-family: BentonSans, sans-serif;
  }

  p {
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 8px;
    color: ${({ theme }) => theme.color.primary};
  }

  .modal-body {
    padding: 0;
  }

  .input-field input {
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    background: none;
    border: 1px solid ${({ theme }) => theme.lineColor.primary};
    border-radius: 4px;
    box-sizing: border-box;
    color: ${({ theme }) => theme.color.primary};
    height: 52px;
    padding: 16px 12px;
    width: 100%;
  }

  .input-field {
    position: relative;
  }

  input:focus {
    outline: -webkit-focus-ring-color auto 1px;
    box-shadow: none;
  }

  .modal-content {
    background-color: ${({ theme }) => theme.background.primary};
    border: 1px solid ${({ theme }) => theme.lineColor.primary};
    box-sizing: border-box;
    max-width: 432px;
    padding: 24px 32px;
    position: relative;
  }

  .modal-title {
    color: ${({ theme }) => theme.color.primary};
  }

  .modal-header {
    justify-content: flex-start;
    padding: 0;
    border: 0;
  }

  .modal-footer {
    padding: 0;
    border: 0;
  }

  .modal-header .btn-close {
    height: 20px;
    position: absolute;
    right: 12px;
    top: 12px;
    width: 20px;
  }

  .env-container {
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    background: rgba(36, 160, 237, 0.2);
    border-radius: 50%;
    fill: ${({ theme }) => theme.color.blueValid};
    height: 48px;
    -ms-flex-pack: center;
    justify-content: center;
    width: 48px;
    margin-right: 8px;
  }

  .env {
    position: relative;
  }

  .svg-circle {
    display: block;
    height: 30px;
  }

  .svg-env {
    fill: #ff4500;
    height: 18px;
    position: absolute;
    right: -2px;
    top: -2px;
    width: 18px;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  circle {
    fill: ${({ theme }) => theme.background.primary};
  }

  .btn-save {
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
    min-height: 32px;
    min-width: 32px;
    padding: 4px 16px;
    border-radius: 9999px;
  }

  .disabled {
    cursor: not-allowed;
    filter: grayscale(1);
    background-color: ${({ theme }) => theme.color.btnHover};
    color: ${({ theme }) => theme.background.primary};
    fill: ${({ theme }) => theme.background.primary};
  }

  .change-btn {
    transition: 0.3s;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 16px;
    text-transform: unset;
    min-height: 24px;
    width: 60px;
    padding: 4px 16px;
    border-radius: 9999px;
    border: 1px solid var(--text-color);
    color: var(--text-color);
    background-color: var(--bg-color);
    cursor: pointer;
  }

  .change-btn:hover {
    opacity: 0.7;
    background-color: var(--bg-color);
    border: 1px solid var(--text-color);
    color: var(--text-color);
  }

  .password-correct {
    align-items: center;
    display: flex;
    height: 20px;
    justify-content: center;
    position: absolute;
    right: 10px;
    top: 16px;
    width: 20px;
    fill:  ${({ theme }) => theme.color.blueValid};
    display: none;
  }

  .enter-email-error {
    align-items: center;
    display: flex;
    height: 20px;
    justify-content: center;
    position: absolute;
    right: 10px;
    top: 16px;
    width: 20px;
    fill:  ${({ theme }) => theme.color.errorColor};
    display: none;
  }

  .enter-email {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    color: ${({ theme }) => theme.color.errorColor};
    left: 0;
    position: absolute;
    top: 100%;
    display: none;
  }

  .error-active {
    display: block;
  }
`;
