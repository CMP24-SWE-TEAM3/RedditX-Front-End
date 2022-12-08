import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ModalFooter } from "react-bootstrap";

export const ModalContainer = styled(Modal)`
  .modal-content {
    max-width: 538px !important;
    min-width: 410px !important;
  }

  .modal-header {
    border-bottom: 1px solid ${({ theme }) => theme.lineColor.primary};
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    padding: 16px;

    .modal-title {
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
    }
    .btn-close:focus {
      box-shadow: none !important;
    }
  }
  .modal-body {
    .form-control {
      :focus {
        box-shadow: none;
      }
    }
  }
`;
export const Characters = styled.p`
  color: ${({ alarmValue }) =>
    alarmValue > 0 ? "#7c7c7c" : "#ea0027"} !important;
  padding-top: 5px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;
export const FormCheck = styled.div`
  display: block;
  margin-bottom: 16px;
  p {
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    padding-top: 8px;
  }
`;
export const FormLabel = styled.div`
  display: flex;
  margin-bottom: 16px;

  .form-check-input {
    width: 1em;
    height: 1em;

    :checked {
      background-color: #0079d3;
    }

    :focus {
      box-shadow: none;
    }
  }
`;
export const FormText = styled.div`
  display: inline;
  font-family: Noto Sans, Arial, sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.categoryColor.text};
  font-size: 14px;
  line-height: 21px;
  margin-left: 6px;
`;
export const ReportLabel = styled.p`
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding-top: 8px;
`;
export const ReportDefault = styled.div`
  padding: 4px 0 8px;
  color: ${({ theme }) => theme.color.muted};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;
export const ButtonContainer = styled(Button)`
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
  cursor: not-allowed;
  filter: grayscale(1);
  color: ${({ theme }) => theme.borderColor.primary};
  border: 1px solid ${({ theme }) => theme.btnColor.primary};
  margin-left: 16px;
  position: relative;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  width: auto;
  //margin-right:${({ deleteBtn }) => (deleteBtn ? "auto" : "none")};
`;
export const Footer = styled(ModalFooter)`
  background-color: ${({ theme }) => theme.lineColor.primary};
  border-top: 1px solid ${({ theme }) => theme.lineColor.primary};
  flex-direction: row-reverse;
  justify-content: flex-start;
  display: flex;
  padding: 16px;
`;
