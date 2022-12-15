import styled from "styled-components";

export const EmbeddedPage = styled.div`
  margin: 0;
  background: none;
  z-index: 1;
  min-height: 700px;
  background: ${({ theme }) => theme.canvas};
  color: ${({ theme }) => theme.color.primary};
  transition: 0.3s;
  padding: 1px;
`;

export const PageContainer = styled.div`
  margin: 20px auto;
  width: 70%;
  min-width: 700px;
  transition: 0.3s;
  background: ${({ theme }) => theme.canvas};
  font: normal x-small verdana, arial, helvetica, sans-serif;
`;