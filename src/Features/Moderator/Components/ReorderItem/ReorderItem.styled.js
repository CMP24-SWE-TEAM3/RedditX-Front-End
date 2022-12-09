import styled from "styled-components";

export const ItemContainer = styled.div`
  margin: 30px 0;
  cursor: ${(isDragging) => (isDragging ? "grab;" : "pointer;")};
  border-radius: 1px;
`;
