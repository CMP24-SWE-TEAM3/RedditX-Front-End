import styled from "styled-components";
export const Container = styled.div`
  /* background-color: #ccc; */
  /* background: ${({ theme }) => theme.background.primary}; */
  width: 100%;
  max-width: 100%;
  display: flex;
  padding-top: 8px;
`;
export const OuterContainer = styled.div`
  width: 100%;
  max-width: 100%;
`;
export const InnerContainer = styled.div`
  margin-bottom: 16px;
`;
export const List = styled.div`
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
  max-width: 100%;
  background: ${({ theme }) => theme.background.primary};
  /* height: 50px; */
`;
