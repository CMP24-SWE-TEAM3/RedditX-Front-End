// Import styled
import styled from "styled-components";

// Main container for the main section
export const Container = styled.div`
  width: 800px;

  /* Disappear when width is less than 960px */
  @media (max-width: 960px) {
    width: 90%;
  }

  /* Disappear when width is less than 960px */
  @media (max-width: 640px) {
    width: 100%;
  }
`;

// Title container
export const Title = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.lineColor.primary};
  height: fit-content;
  margin-top: 25px;
  h4 {
    font-size: 18px;
  }
`;
