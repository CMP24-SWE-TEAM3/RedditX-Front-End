// Import styled
import styled from "styled-components";

// Import bootstrap components
import { Col, Row } from "react-bootstrap";

export const FormContainer = styled.div`
  padding: 20px;
  padding-bottom: 5px;
  min-width: fit-content;
  background-color: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.borderColor.primary};
  border-radius: 4px;
`;

export const Input = styled.input`
  display: inline-block;
  margin: 3px auto;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.canvas};
  color: ${({ theme }) => theme.color.primary};

  padding: 10px;
  width: 350px;
  @media only screen and (max-width: 600px) {
    width: fit-content;
  }
  @media only screen and (max-width: 340px) {
    width: 100px;
  }
  &::-webkit-input-placeholder {
    /* Edge */
    color: ${({ theme }) => theme.color.primary};
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.color.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const StyledButton = styled.button`
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.background.primary};
  padding: 3px 20px;
  border-radius: 9999px;
  font-size: 15px;
  display: block;
  margin-left: auto;
`;

export const FormLabel = styled.label`
  width: fit-content;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.color.primary};
`;

export const FormRow = styled(Row)`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;

export const Column = styled(Col)`
  width: fit-content;
`;
