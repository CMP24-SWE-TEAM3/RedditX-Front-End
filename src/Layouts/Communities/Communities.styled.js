import styled from "styled-components";

export const Container = styled.div`
  display: block;
`;
export const InnerContainer = styled.div`
  border-radius: 4px;
  padding: 16px;
  background-color: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.borderColor.secondary};
`;
export const OuterContainer = styled.div`
  /* @media (min-width: 960px) {
    width: 640px;
  } */
  /* min-width: 0; */
  width: 700px;
  max-width: 90%;
  margin: 0 auto;
`;
