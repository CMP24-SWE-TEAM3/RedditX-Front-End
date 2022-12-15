import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  position: sticky;
  top: 88px;
  right: 0;
  left: 0;
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
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 100px;
  padding: 2px 20px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.background.primary};
  font-weight: 500;
  margin: 0 10px;
`;
export const NameHeader = styled.h2`
  font-size: 18px;
  color: ${({ theme }) => theme.color.primary};

  svg {
    color: #0079d3;
  }
`;
export const EditMod = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.color.primary};
`;
