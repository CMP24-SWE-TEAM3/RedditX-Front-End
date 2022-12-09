import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.background.primary};
`;

export const SearchContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor.primary}; !important;
  color: ${({ theme }) => theme.borderColor.primary};
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 5px;
  
`;

export const AbilityContainer = styled.div`
  display: flex;
  gap: 1%;
  width: 100%;
`;
export const CheckBox = styled.div`
  display: flex;
  align-items: start;

  input[type="checkbox"]:checked {
    border-color: #0079d3;
    background-color: #0079d3;
  }
`;
export const Ability = styled.div``;
export const Head = styled.h4`
  font-size: 12px;
  color: ${({ theme }) => theme.color.primary};
`;
export const Par = styled.p`
  width: ${(p) => (p.fullWidth ? "100%" : "auto")};
  font-size: 11px;
  color: ${({ theme }) => theme.borderColor.primary};
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eee;
  margin-bottom: 5px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  padding: 10px 0;
  width: 100%;
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
  opacity: ${(p) => (p.valid || p.page ? "1" : "0.3")};
`;
export const GiveAccess = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  margin: 10px 0;
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor.primary}; !important;
  color: ${({ theme }) => theme.borderColor.primary};
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 5px;
`;
