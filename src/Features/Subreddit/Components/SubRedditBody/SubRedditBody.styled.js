import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  max-width: 100%;
  padding: 20px 24px;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 960px) {
    margin: 0;
  }

  @media (max-width: 640px) {
    flex-direction: column-reverse;
    padding: 24px 0;
  }
`;
