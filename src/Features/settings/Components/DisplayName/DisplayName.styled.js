import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 32px;
  flex-flow: column wrap;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  max-width: 80%;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 12px;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
`;

export const InputName = styled.input`
  background-color: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.lineColor.primary};
  color: ${({ theme }) => theme.color.primary};
  box-sizing: border-box;
  height: 48px;
  margin-bottom: 8px;
  border-radius: 4px;
  padding: 12px 24px 4px 12px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  font-family: inherit;
`;

export const RemCharacters = styled.div`
  color: ${({ theme, text, len }) =>
    text.length !== len ? theme.color.muted : "#ea0027"};
  padding-top: 5px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
`;

export const Text = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.color.muted};
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 0;
`;
