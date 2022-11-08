// Import styled
import styled, { css } from "styled-components";

// Import bootstrap components
import { Button } from "react-bootstrap";

export const PostFlagsWrapperContainer = styled.div`
  max-width: 529px;
  margin-top: 16px;
`;

export const Text = styled.span`
  display: inline-block;
  margin: 0 5px;
`;

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

export const NSFWButton = styled(StyledPostFlag)`
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme, selected }) =>
        theme.color.lightOrange}!important;
      border-color: ${({ theme }) => theme.color.lightOrange}!important;
      color: ${({ theme }) => theme.background.primary}!important;
    `}
`;

export const SpoilerButton = styled(StyledPostFlag)`
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme, selected }) =>
        theme.color.primary}!important;
      border-color: ${({ theme }) => theme.color.primary}!important;
      color: ${({ theme }) => theme.background.primary}!important;
    `}
`;

export const FlairButton = styled(StyledPostFlag)`
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ background }) => background}!important;
      border-color: ${({ background }) => background}!important;
      color: ${({ color }) => color}!important;
    `}
`;
