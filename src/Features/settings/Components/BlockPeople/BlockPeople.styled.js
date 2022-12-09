import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const Header = styled.h4`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 8px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.muted};
  font-weight: 400;
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 16px;
`;

export const BlockUserContainer = styled.div`
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.lineColor.primary};
  display: flex;
  height: 52px;
  padding: 0 24px;
  position: relative;

  :focus-within {
    label {
      top: 8px;
    }
  }

  label {
    ${({text})=>text.length!==0?`top: 8px;`:``}
  }
`;

export const BlockUserInput = styled.input`
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  background-color: ${({ theme }) => theme.background.primary};
  box-shadow: none;
  color: ${({ theme }) => theme.color.primary};
  flex-grow: 1;
  padding-top: 10px;
  border: none;
  :focus-visible {
    outline: none;
  }
`;

export const InputLabel = styled.label`
  font-size: 10px;
  line-height: 12px;
  color: ${({ theme }) => theme.color.muted};
  pointer-events: none;
  position: absolute;
  top: 18px;
  transition: top 0.4s;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const BlockUserButton = styled.button`
  font-size: 14px;
  line-height: 32px;
  color: ${({ theme }) => theme.color.secondary};
  opacity: ${({ text }) => (text.length !== 0 ? 1 : 0.4)};
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background-color: transparent;
  border: none;
`;
