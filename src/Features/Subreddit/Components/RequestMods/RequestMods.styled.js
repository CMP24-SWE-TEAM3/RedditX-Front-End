import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const StyledModal = styled(Modal)`
  ${({ show }) => (!show ? "display:none;" : "")}
  div.modal-backdrop.show {
    display: none !important;
  }
  /* display: none; */
  div.show {
    display: none;
    ${({ show }) => (!show ? "display:none !important;" : "")}
  }

  div.modal-header {
    border-bottom: 1px solid ${({ theme }) => theme.lineColor.primary};
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    padding: 16px;
    ${({ theme, priv }) =>
      priv ? "" : `background-color: ${theme.color.secondary};`}
  }

  div.modal-dialog.modal-lg.modal-dialog-centered {
    ${({ show }) => (!show ? "display:none;" : "")}
    width: 440px;
    max-width: 100%;
    box-sizing: border-box;
  }

  div.modal-footer {
    background-color: ${({ theme }) => theme.lineColor.primary};
    border-top: 1px solid ${({ theme }) => theme.lineColor.primary};
    display: flex;
    justify-content: flex-end;
    padding: 16px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

export const ModalHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ModalHeaderTitle = styled.div`
  flex: 1 1 100%;
  width: 100%;
  color: ${({ theme, priv }) =>
    priv ? theme.color.primary : theme.background.primary};
`;

export const Title = styled.div`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
`;

export const ModalCommunity = styled.div`
  align-items: center;
  display: flex;
  padding-top: 8px;

  span {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    vertical-align: middle;
    display: inline-block;
  }
`;

export const XButton = styled.button`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-transform: uppercase;
  background: transparent;
  border: none;
  padding: 0;
  text-decoration: underline;
  svg {
    font-size: 21px;
    fill: ${({ theme }) => theme.borderColor.primary};
  }
`;

export const BodyTextContainer = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.color.primary};
  padding-bottom: 16px;
`;

export const TextAreaContainer = styled.div`
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  appearance: none;
  background-color: ${({ theme }) => theme.color.mainInputBackGroundColor};
  border: 1px solid ${({ theme }) => theme.lineColor.primary};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.primary};
  max-width: 100%;
  min-width: 100%;
  outline: 0;
  width: 100%;
`;

export const StyledLabel = styled.label`
  padding: 22px 0 0 12px;
  display: block;
  position: relative;

  ${({ text }) =>
    text.length !== 0
      ? `span {transform: translate3d(0, -10px, 0) scale(0.83333333);}`
      : ""}

  :focus-within {
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      transform: translate3d(0, -10px, 0) scale(0.83333333);
      white-space: nowrap;
      width: 100%;
    }
  }

  textarea {
    min-height: 132px;
    background-color: ${({ theme }) => theme.color.mainInputBackGroundColor};
    border: none;
    color: ${({ theme }) => theme.color.primary};
    outline: none;
    padding: 0;
    resize: vertical;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    font-family: inherit;
  }
`;

export const StyledSpan = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.muted};
  left: 12px;
  pointer-events: none;
  position: absolute;
  top: 13px;
  transform: translateZ(0);
  transform-origin: 0 50%;
  transition: transform 0.2s ease-in-out;
`;

export const CancelButton = styled.button`
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.secondary};
  fill: ${({ theme }) => theme.color.secondary};

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
  border-radius: 99px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  width: auto;

  &:hover {
    border-color: rgba(135, 138, 140, 0.8);
    color: rgba(135, 138, 140, 0.8);
  }
`;

export const SubmitButton = styled.button`
  color: ${({ theme }) => theme.background.primary};
  background: ${({ theme }) => theme.color.secondary};
  border: none;
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
  border-radius: 99px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
  text-align: center;
  width: auto;

  :hover {
    background: ${({ theme }) => theme.background.hover_background_button_blue};
  }
`;
