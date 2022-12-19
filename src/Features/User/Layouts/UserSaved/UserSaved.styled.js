import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 0;
`;

export const SavedContainer = styled.div`
  width: 100%;
  min-height: 1000px;
`;

export const StyledDiv = styled.div`
  & > div:first-child {
    width: 100%;
  }
`;
