import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

export const ModalStyled = styled(Modal)`
  .btn-close:focus {
    box-shadow: none;
  }

  & .fade .modal-backdrop .show {
    background: rgb(28 28 28 / 90%);
  }

  & .btn-close :focus {
    box-shadow: none !important;
  }

  & .modal-content {
    color: ${({theme}) => theme.color.primary};
    background-color: ${({theme}) => theme.background.primary} !important;
    margin-top: 16%;
  }

  & .div-content {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: ${({theme}) => theme.color.muted};
    margin: 1px 0 0 2px;

  }

  & .form-control:focus {
    box-shadow: none;
    border: 1px solid ${({theme}) => theme.color.secondary} !important;
  }

  & .modal-content p {
    color: ${({theme}) => theme.color.gray};
    margin-bottom: 30px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
  }

  & .modal-title {
    font-size: 16px;
    line-height: 20px;
    //border-bottom: 1px solid var(--newCommunityTheme-line);
    color: ${({theme}) => theme.color.primary} !important;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  & .check-form {
    margin-bottom: 30px;

    .ico {
      width: 16px;
      height: 16px;
      margin: 0 4px;
      align-self: baseline;
      color: #878a8c;
    }
  }

  & .full-content {
    display: flex;
    align-items: center;
  }

  .adult-check {
    align-items: center;
    display: flex;
  }

  & .adult-check span {
    font-size: 12px;
    line-height: 17px;
    display: inline-block;
    background-color: #ff585b;
    font-weight: 500;
    border-radius: 2px;
    height: 15px;
    padding: 0 4px;
    color: ${({theme}) => theme.background.primary} !important;
    margin: 0 4px 0 8px;
    //vertical-align: middle;
  }

  & .form-check-label {
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    display: flex;
    vertical-align: top;
    padding-left: 4px;
    margin-top: -1px;
    align-items: center;
  }

  & .form-check {
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
  }

  .adult-check .form-check-input {
    width: 1.3em;
    height: 1.3em;
    fill: #878a8c;

    :focus {
      //border: none;
      box-shadow: none;
    }

    :checked {
      background-color: #0079d3;
    }
  }

  & .adult {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 4px;
    font-weight: 500;

  }

  & .modal-footer {
    background-color: ${({theme}) => theme.background.post_background};
  }

  & .close-but {
    margin-left: 8px;
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    background-color: ${({theme}) => theme.background.primary};
    line-height: 17px;
    text-transform: unset;
    min-height: 32px;
    min-width: 32px;
    padding: 4px 16px;
    border: 1px solid ${({theme}) => theme.background.secondary};
    color: ${({theme}) => theme.color.secondary};
    border-radius: 999px;

    :hover {
      background-color: ${({theme}) => theme.background.hover_background};
    }
  }

  & .create-but {
    background-color: ${({theme}) => theme.color.secondary};
    position: relative;
    margin-left: 8px;
    color: ${({theme}) => theme.background.primary};
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 999px;
    letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
    min-height: 32px;
    min-width: 32px;
    padding: 4px 16px;

    :hover {
      background-color: ${({theme}) => theme.background.hover_background_button_blue};
    }
  }
`
export const AlarmInput = styled.p`
  color: ${({alarmValue}) => (alarmValue > 0) ? true : '#ea0027'} !important;
`