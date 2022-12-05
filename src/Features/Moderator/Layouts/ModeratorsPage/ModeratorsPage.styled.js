import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const InnerContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.canvas};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  background-color: ${({ theme }) => theme.lineColor.primary};
  padding: 10px 0;
`;
export const ButtonOne = styled.button`
  background-color: transparent;
  border-radius: 100px;
  padding: 2px 20px;
  border: 1px solid;
  color: ${({ theme }) => theme.btnColor.primary};
  font-weight: 500;
  margin: 0 10px;
`;
export const ButtonTwo = styled.button`
  background-color: ${({ theme }) => theme.btnColor.primary};
  border-radius: 100px;
  padding: 2px 20px;
  border: 1px solid transparent;
  color: white;
  font-weight: 500;
  margin: 0 10px;
`;
export const NameHeader = styled.h2`
  font-size: 18px;

  svg {
    color: ${({ theme }) => theme.btnColor.primary};
  }
`;
export const EditMod = styled.h2`
  font-size: 14px;
`;
