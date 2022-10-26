import styled from "styled-components";

export const StyledButton = styled.span`
  color: #999;
  cursor: pointer;
  margin-right: 5px;
  padding: 2px 0;
  display: inline-block;
  color: ${({ active, theme }) =>
    active ? "black" : theme.borderColor.primary};
  border-radius: 4px;
  outline: none;
  padding: 4px;
  &:hover {
    background-color: ${({ theme }) => theme.background.muted};
  }
`;
