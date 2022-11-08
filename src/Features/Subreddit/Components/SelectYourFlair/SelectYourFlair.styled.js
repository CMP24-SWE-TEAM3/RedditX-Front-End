import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

export const FlairModal = styled(Modal)`
  ${({ show }) => (!show ? "display:none;" : "")}
  div.modal-backdrop.show {
    display: none !important;
  }
  display: none;
  div.show {
    display: none;
    ${({ show }) => (!show ? "display:none !important;" : "")}
  }
  div.modal-dialog.modal-lg.modal-dialog-centered {
    ${({ show }) => (!show ? "display:none;" : "")}
    width: 402px;
    max-width: 100%;
    box-sizing: border-box;
  }
  div.modal-body {
    padding: 0;
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
    border-color: rgba(135, 138, 140, 0.8);
    color: rgba(135, 138, 140, 0.8);
    :hover {
      background-color: #e2e9ef;
    }
  }

  button.btn.save {
    background-color: ${({ theme }) => theme.color.secondary};

    :hover {
      background-color: #1483d6;
    }
  }
`;
export const Title = styled.div`
  color: ${({ theme }) => theme.color.primary};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
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

export const SelectedFlairDiv = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  border-bottom: none;
  text-align: center;
  padding: 22px 16px;

  span.selected-flair {
    box-sizing: border-box;
    margin-bottom: 0;
    margin-left: 8px;
    max-width: 80%;
  }
`;

export const Flair = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  border-radius: 2px;
  display: inline-block;
  margin-right: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: text-bottom;
  white-space: pre;
  word-break: normal;
  padding: 0 4px;
`;

export const SearchEditDiv = styled.div`
  display: flex;
  height: 380px;
  flex-flow: column nowrap;
  border-bottom: 1px solid ${({ theme }) => theme.lineColor.primary};
`;

export const SearchDiv = styled.div`
  background-color: ${({ theme }) => theme.button.muted};
  flex: 1;
  overflow-y: auto;
  padding: 16px 0;
`;

export const SearchComponent = styled.div`
  position: relative;
  color: ${({ theme }) => theme.borderColor.primary};
  margin: 0 16px 16px;

  input {
    background-color: ${({theme})=>theme.background.primary} ;
    border-radius: 4px;
    border: 1px solid;
    box-sizing: border-box;
    color: ${({ theme }) => theme.color.primary};
    height: 48px;
    padding: 0 16px 0 32px;
    width: 100%;
  }
`;

export const SearchIcon = styled(FaSearch)`
  fill: currentColor;
  height: 16px;
  left: 12px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
`;

export const StyledForm = styled(Form)`
  div.form-check {
    padding-left: 2.5em;
    :hover,
    :focus {
      background-color: #24a0ed;
    }
    input {
      cursor: pointer;
    }
  }
`;

export const EditDiv = styled.div`
  background-color: ${({theme})=>theme.background.primary};
  padding: 16px;
`;

export const EditFlairTitle = styled.div`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  color: ${({theme})=>theme.color.muted} ;
  margin-bottom: 8px;
`;

export const AllowedText = styled.div`
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({theme})=>theme.color.primary};
  margin-bottom: 8px;
`;

export const EditFlairText = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid ${({ theme }) => theme.lineColor.primary};
  background-color: ${({ theme }) => theme.button.muted};
  border-radius: 4px;
  color: ${({ theme }) => theme.color.primary};
  :hover {
    border-color: ${({ theme }) => theme.borderColor.primary};
  }
  :focus-within {
    border-color: ${({theme})=>theme.color.secondary} ;
  }
`;

export const InputFlairText = styled.input`
  padding: 8px 30px 8px 8px;
  border: 0;
  background-color: transparent;
  width: 100%;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  outline: none;
  font-size: 12px;
`;

export const CharRem = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.borderColor.primary};
  margin: 6px 4px;
  display: flex;
  align-items: center;
`;

export const ShowMyFlairDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  border-top: 1px solid ${({ theme }) => theme.lineColor.primary};
  label.form-check-label {
    font-size: 14px;
    font-weight: 500;
    line-height: 26px;
    color: ${({ theme }) => theme.color.primary};
  }

  input.form-check-input {
    width: 1.2em;
    height: 1.2em;
  }
`;
