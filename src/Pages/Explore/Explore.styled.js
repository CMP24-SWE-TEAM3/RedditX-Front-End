import styled from "styled-components";
export const Container = styled.div`
  transition: margin-top 0.3s ease;
  background-color: ${({ theme }) => theme.canvas};
`;
export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 48px);
  /* background-color: antiquewhite; */
`;
export const BodyContainer = styled.div`
  max-width: 100%;
  @media (min-width: 640px) {
    padding: 20px 24px;
  }
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
