import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  background-color: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.lineColor.primary};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.primary};
  display: block;
  width: 100%;
  padding: 8px;
  resize: both;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  /* font-family: inherit; */
`;
