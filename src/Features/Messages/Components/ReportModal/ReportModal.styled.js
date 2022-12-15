import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

export const StyledModal = styled(Modal)`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.background.lightMuted};
  transition: 0.3s;
  font-family: IBMPlexSans, Arial, sans-serif;
  :root {
    --bg-color: ${({ theme }) => theme.background.primary};
    --text-color: ${({ theme }) => theme.background.secondary};
  }
  .modal-header {
    height: 50px;
    border-bottom: 1px solid rgba(28, 28, 28, 0.03);
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 24px 0 20px;
    font-weight: 700;
    font-size: 14px;
    color: ${({ theme }) => theme.color.muted};
    transition: 0.3s;
  }

  .modal-body {
    display: flex;
    flex-direction: column;
  }
  .body-text {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-size: 16px;
    color: ${({ theme }) => theme.color.titleText_of_link};
    transition: 0.3s;
    line-height: 1.2;
    margin-top: 16px;
    margin-bottom: 8px;
  }
  .btn-container {
    margin-top: 16px;
  }
  .btn-div {
    font-size: 14px;
    text-align: center;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid rgba(135, 138, 140, 0.2);
    border-radius: 20px;
    color: ${({ theme }) => theme.color.muted};
    transition: 0.3s;
    font-weight: 500;
    margin: 0 0 8px 4px;
    overflow: hidden;
    width: fit-content;
  }

  .btn-label {
    padding: 10px 12px;
    cursor: pointer;
    margin: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  .btn-div:hover {
    color: ${({ theme }) => theme.btnColor.text};
    background-color: #42adf0;
  }
  .btn-div:active {
    color: ${({ theme }) => theme.btnColor.text};
    background-color: #42adf0;
  }
  .not-sure-container {
    background: rgba(28, 28, 28, 0.03);
    border-radius: 8px;
    padding: 5px 16px 5px 12px;
    display: flex;
    box-sizing: border-box;
    margin-top: 16px;
    margin-right: 3px;
  }

  .not-sure-paragraph {
    flex: 0 1 auto;
    font-size: 14px;
    line-height: 1.45;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.color.muted};
    transition: 0.3s;
  }
  .icon {
    flex: 0 0 20px;
    width: 20px;
    margin-right: 12px;
    fill: ${({ theme }) => theme.borderColor.primary};
    transition: 0.3s;
  }
  .modal-footer {
    box-shadow: 0 -1px 0 rgba(28, 28, 28, 0.03);
    padding: 20px 0 16px;
    min-height: 80px;
    display: flex;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
  }

  .submit {
    margin-top: 8px;
    flex: 0 0 150px;
    background: #2090d5;
    height: 31px;
    border-radius: 100px;
    color: ${({ theme }) => theme.btnColor.text};
    transition: 0.3s;
    align-self: flex-end;
    margin-left: auto;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    outline: none;
  }
  
`;

export const Report = styled.a`
  color: #888;
  font-weight: bold;
  padding: 0 1px;
  text-transform: capitalize;
  text-decoration: none;
  cursor: pointer;
  line-height: 1.6em;

  &:hover {
    color: #888;
    text-decoration: underline;
  }
`;
