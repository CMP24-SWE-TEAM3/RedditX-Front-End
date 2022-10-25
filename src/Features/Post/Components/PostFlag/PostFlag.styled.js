// Import styled
import styled from "styled-components";

// Import bootstrap components
import { Button } from "react-bootstrap";

export const StyledPostFlag = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 9999px;
  color: ${({ theme }) => theme.color.muted} !important;
  font-weight: bold;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  border: 1px solid
    ${({ theme, isDisabled }) =>
      isDisabled
        ? theme.borderColor.muted
        : theme.borderColor.primary}!important;
  background-color: ${({ theme }) => theme.background.primary} !important;
  margin-bottom: 8px;
  margin-right: 4px;
  padding-top: 4px;
  padding-bottom: 4px;

  &:hover {
    color: ${({ theme }) => theme.color.muted};
    background-color: ${({ theme }) => theme.button.muted};
    border-color: ${({ theme }) => theme.borderColor.primary};
  }
`;
