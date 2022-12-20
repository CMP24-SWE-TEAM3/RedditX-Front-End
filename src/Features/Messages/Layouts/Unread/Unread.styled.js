import styled from "styled-components";

export const EmbeddedPage = styled.div`
  transition: 0.3s;
  margin: 0;
  background: none;
  z-index: 1;
  min-height: 700px;
  background: ${({ theme }) => theme.canvas};
  color: ${({ theme }) => theme.color.primary};
  padding: 1px;
`;

export const PageContainer = styled.div`
  transition: 0.3s;
  margin: 20px auto;
  width: 70%;
  min-width: 700px;
  background: ${({ theme }) => theme.canvas};
  font: normal x-small verdana, arial, helvetica, sans-serif;
`;

export const Empty = styled.div`
  padding: 0;
  list-style-type: none;
  background: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.color.primary};
  margin: 20px auto;
  width: 70%;
  min-width: 700px;
`

export const EmptyMessage = styled.p`
  margin: 0;
  font-size: small;
  padding: 20px;
  margin-right: auto;
  color: ${({ theme }) => theme.color.primary};

`;