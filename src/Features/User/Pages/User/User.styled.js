import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
`;

export const InnerContainer = styled.div`
  max-width: 100%;
  padding: 20px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  background: ${({ theme }) => theme.canvas};

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  } 
`;
