// Import styled
import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

// Import bootstrap components
import { Modal, Form, Button } from "react-bootstrap";

export const GlobalStyles = createGlobalStyle`
    .modal-backdrop{
        opacity: 0 !important;
    }
    .modal-dialog{
        max-width: 402px;
    }
`;

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  margin-left: 10px;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.background.primary};
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.background.primary};
  padding: 10px;
  margin: 15px;
  &:focus-within {
    border: 2px solid ${({ theme }) => theme.color.primary};
  }
`;

export const RadioContainer = styled.div`
  background-color: ${({ theme }) => theme.background.lightMuted};
  padding: 15px 0;
  height: 100%;
`;

export const StyledModal = styled(Modal)`
  height: 100%;
`;

export const FormCheck = styled(Form.Check)`
  padding: 3px 15px;
  display: flex;
  margin-top: 5px;
  align-items: center;
  &:hover {
    background-color: #24a0ed;
  }
`;

export const FormCheckLabel = styled(Form.Check.Label)`
  display: inline-flex;
  padding: 0 15px;
  margin-right: auto;
  width: 100%;
  height: 100%;
`;

export const ModalBody = styled(Modal.Body)`
  padding: 0;
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.color.primary};
`;

export const ModalHeader = styled(Modal.Header)`
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.color.primary};
`;

export const ModalFooter = styled(Modal.Footer)`
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.color.primary};
  padding: 15px;
`;

export const SelectedFlairContainer = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.color.primary};
  padding: 0 15px;
  margin-top: 15px;
`;

export const Flair = styled.span`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  border-radius: 2px;
  display: inline-block;
  margin-right: 5px;
  word-break: normal;
  padding: 0 4px;
`;

export const FlairParagraph = styled.p`
  font-size: 12px;
`;

export const EditFlair = styled.div`
  font-size: 12px;
  padding: 16px;
  min-height: 160px;
  ${({ flairSelected }) =>
    !flairSelected &&
    css`
      background-color: ${({ theme }) => theme.background.lightMuted};
    `}

  input {
    max-width: 100%;
    width: 100%;
    outline: none;
    color: ${({ theme }) => theme.color.primary};
    border-radius: 4px;
    border: 0.5px solid
      ${({ theme, empty }) => (empty ? theme.color.danger : theme.color.muted)};
    background-color: ${({ theme }) => theme.background.lightMuted};
    padding: 10px;
    font-size: 16px;
    &:hover {
      border: 1px solid ${({ theme }) => theme.color.primary};
    }
    &:focus-within {
      border: 1px solid ${({ theme }) => theme.color.link};
    }
  }

  .edit-flair {
    font-weight: 500;
    color: ${({ theme }) => theme.color.muted};
  }

  .remaining-text {
    font-size: 12px;
    color: ${({ theme }) => theme.color.muted};
    margin: 5px 0 0 0;
  }

  .danger-remaining-text {
    font-size: 12px;
    color: ${({ theme }) => theme.color.danger};
    margin: 5px 0 0 0;
  }
`;

export const CancelButton = styled.button`
  margin-right: 10px;
  outline: none;
  color: ${({ theme }) => theme.color.muted};
  border: 1px solid ${({ theme }) => theme.color.muted};
  background-color: transparent;

  border-radius: 9999px;
  font-weight: bold;
  padding: 4px 16px;
  &:hover {
    border-color: ${({ theme }) => theme.color.muted};
    background-color: ${({ theme }) => theme.button.hoverLight};
  }
`;

export const ApplyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, disabled }) =>
    disabled ? theme.background.muted : theme.background.primary};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.muted : theme.color.secondary};
  border-color: ${({ theme }) => theme.color.secondary};
  border-radius: 9999px;
  font-weight: bold;
  padding: 5px 25px;
  border: none;
  &:hover {
    color: ${({ theme, disabled }) =>
      disabled ? theme.background.muted : theme.background.primary};
    border-color: ${({ theme }) => theme.color.secondary};
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.color.muted : theme.button.hoverBlue};
  }
`;
