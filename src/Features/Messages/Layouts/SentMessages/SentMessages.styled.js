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
  background: ${({ theme }) => theme.canvas};
  transition: 0.3s;
  font: normal x-small verdana, arial, helvetica, sans-serif;

  &:nth-child(odd){
    background-color: ${({ theme }) => theme.background.lightMuted};
  }

  &:nth-child(even){
    background-color: ${({ theme }) => theme.background.primary};
  }
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