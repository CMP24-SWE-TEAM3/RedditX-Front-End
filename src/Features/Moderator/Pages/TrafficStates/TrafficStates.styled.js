import styled from "styled-components";

export const Container = styled.div`
  border-radius: 0 0 4px 4px;
  color: ${({ theme }) => theme.categoryColor.text};
  margin: 0 24px;
  overflow: hidden;
  padding-top: 16px;
`;
