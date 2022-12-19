import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  @media (min-width: 992px) {
    .modal-lg,
    .modal-xl {
      width: 538px;
    }
  }
  justify-content: center;
  div.modal-content {
    max-width: 538px;
    min-width: 410px;
  }

  div.modal-header {
    border-bottom: 1px solid ${({ theme }) => theme.lineColor.primary};
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    padding: 16px;
  }
  div.modal-title.h4 {
    color: ${({ theme }) => theme.color.primary};
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }

  div.modal-footer {
    background-color: ${({ theme }) => theme.lineColor.primary};
  }

  button.btn-primary {
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
    min-height: 32px;
    min-width: 32px;
    padding: 4px 16px;
    align-items: center;
    border-radius: 20px;
    box-sizing: border-box;
    text-align: center;
    width: auto;
    justify-content: center;
    display: flex;
  }

  button.btn.discard {
    background-color: transparent;
    color: ${({ theme }) => theme.color.secondary};

    :hover {
      border-color: rgba(135, 138, 140, 0.8);
      color: rgba(135, 138, 140, 0.8);
    }
  }

  button.btn.save {
    background-color: ${({ theme }) => theme.color.secondary};

    :hover {
      background-color: #1483d6;
    }
  }

  /*
  color: #1c1c1c;
  font-size: 16px;
font-weight: 500;
line-height: 20px;
contained-modal-title-vcenter
  */
`;
