import { Button } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  display: flex;
  justify-content: flex-end;
`;

export const NavigateButton = styled(Button)`
  border-radius: 9999px;
  margin: 5px 5px;
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.color.secondary};
  font-weight: 600;
  &:hover {
    background-color: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.color.secondary};
  }
`;
