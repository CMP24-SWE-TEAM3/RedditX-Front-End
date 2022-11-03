// Import styled
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

// Import bootstrap components
import { Modal, Form } from "react-bootstrap";

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
  background-color: ${({ theme }) => theme.lineColor.primary};
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
