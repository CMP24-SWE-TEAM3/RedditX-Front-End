import { Button } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #cccccc2b;
  height: auto;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "650px")};
  max-width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  cursor: ${(p) => (!p.fullPost ? "pointer" : "default")};
  border: 1px solid transparent;
  margin-bottom: 10px;
  &:hover {
    border-color: ${(p) => (!p.fullPost ? "black !important" : "transparent")};
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const PostBar = styled.div`
  width: 95%;
  height: 100%;
  background-color: red;
`;
export const ContentContainer = styled.div`
  width: 93%;
`;

export const DraftEditorContainerOuter = styled.div`
  margin: 50px 5px;
  background-color: ${({ theme }) => theme.background.lightMuted};
`;

export const CancelButton = styled(Button)`
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.color.secondary};
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.background.muted};
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const SubmitButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.background.primary};
  margin-left: 10px;
  border-radius: 9999px;
  font-size: 14px;
  border: none;
  font-weight: 700;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;
