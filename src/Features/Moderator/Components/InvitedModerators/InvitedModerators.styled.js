import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const SearchContainer = styled.div`
  height: 50px;
  background-color: ${({ theme }) => theme.lineColor.primary};
  display: flex;
  align-items: center;

`;
export const SearchInput = styled.input`
  height: 30px;
  margin-left: 10px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor.primary};
`;
export const SearchIcon = styled.div`
  height: 30px;
  padding: 5px;
  color: white;
  border-radius: 0;
  background-color: ${({ theme }) => theme.borderColor.primary};
`;