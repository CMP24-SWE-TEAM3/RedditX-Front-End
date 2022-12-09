import styled from "styled-components";

export const Button = styled.button`
  width: 75.36px;
  height: 32px;
  border: none;
  display: inline-flex;
  position: relative;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 20px;
  margin: 0.2em;

  &:hover {
    background-color: ${(props) => props.theme.background.muted};
  }
  @media (max-width: 1010px) {
    display: none;
  }
`;
export const Word = styled.span`
  padding-left: 4px;
  color: #878a8c;
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 18px;
  max-height: 54px;
  white-space: normal;
  text-align: left;
  padding-top: 6px;
`;
export const Ico = styled.span`
  color: #878a8c;
  margin: 0.12em;
`;
