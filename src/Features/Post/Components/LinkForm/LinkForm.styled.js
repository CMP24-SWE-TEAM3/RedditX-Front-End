// Import styled
import styled from "styled-components";

// Import bootstrap components
import { Button } from "react-bootstrap";

export const StyledLinkForm = styled.div`
  padding: 20px;

  .form-control:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme.color.primary};
  }

  .form-control {
    border-color: ${({ theme }) => theme.lineColor.primary};
    resize: none;
    background-color: ${({ theme }) => theme.background.primary};
    caret-color: ${({ theme }) => theme.color.primary};
    overflow-wrap: break-word;
    word-break: break-all;
    resize: none;
  }

  .title-input {
    height: auto;
    padding-right: 50px;
    overflow: hidden;
  }

  .title-group {
    display: flex;
    align-items: center;
    position: relative;
    span {
      position: absolute;
      right: 10px;
      font-size: 12px;
      color: ${({ theme }) => theme.color.muted};
      font-weight: 600;
    }
  }
`;

export const SubmitButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid ${({ theme }) => theme.lineColor.primary};
  padding: 20px 0;
`;

export const SaveDraftButton = styled(Button)`
  margin-right: 10px;
  color: ${({ theme }) => theme.color.secondary};
  border-color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.background.primary};

  border-radius: 9999px;
  font-weight: bold;
  padding: 4px 16px;
  &:hover {
    color: ${({ theme }) => theme.color.secondary};
    border-color: ${({ theme }) => theme.color.muted};
    background-color: ${({ theme }) => theme.button.hoverLight};
  }
`;
export const PostButton = styled(Button)`
  color: ${({ theme }) => theme.background.primary};
  background-color: ${({ theme }) => theme.color.secondary};
  border-color: ${({ theme }) => theme.color.secondary};
  border-radius: 9999px;
  font-weight: bold;
  padding: 4px 16px;
  &:hover {
    color: ${({ theme }) => theme.background.primary};
    border-color: ${({ theme }) => theme.color.secondary};
    background-color: ${({ theme }) => theme.button.hoverBlue};
  }
`;
