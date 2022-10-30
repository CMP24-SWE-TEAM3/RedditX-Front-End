// Import styled
import styled from "styled-components";

// Main container for the create post page
export const Container = styled.div`
  background-color: ${({ theme }) => theme.canvas};
  color: ${({ theme }) => theme.color.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  padding: 20px;
`;
