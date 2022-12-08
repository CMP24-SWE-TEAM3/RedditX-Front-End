import styled from "styled-components";

export const DroppableContainer = styled.div`
  width: 100%;
  display: ${({ showDragDrop }) =>
    showDragDrop ? "inherit" : "none"} !important;
`;
