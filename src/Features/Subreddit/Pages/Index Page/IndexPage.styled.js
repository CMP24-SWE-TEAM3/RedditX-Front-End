import styled from "styled-components";


export const IndexPageContainer = styled.div`
    background-color: ${({theme})=>theme.canvas};
    transition: 0.3s;
    min-height: calc(100vh - 48px);
    line-height: 1;
    font-family: IBMPlexSans, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
`
export const IndexPage = styled.div`
    display: flex;
    flex-wrap: wrap; 
`;