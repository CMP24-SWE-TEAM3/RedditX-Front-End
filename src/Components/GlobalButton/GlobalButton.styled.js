import styled from "styled-components";

export const GlobalButtonStyled = styled.button`
  background: none;
  border: none;
  outline: none;
  //margin: 4px;
  width: 38px;
  height: 38px;
  margin: 6px;
  display: inline-block;
  &:hover {
    background: ${({ theme }) => theme.background.post_background};
  }

  color: ${({ theme }) => theme.color.primary};
`;
export const ButtonsGroupStyled = styled.div`
  display: inline-block;
`;
