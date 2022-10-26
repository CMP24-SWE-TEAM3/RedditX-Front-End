import styled from "styled-components";
export const SubRedditContainer = styled.div`
  /* * { */
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  /* } */

  header {
    height: 48px;
    background-color: black;
    color: white;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 48px);
  background-color: ${({ theme }) => theme.canvas};

  /* .background {
    min-height: 100%;
    overflow: hidden;
    position: relative;
    flex: none;
  }
  .background::before {
    content: " ";
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    will-change: transform;
    background: ${({ theme }) => theme.canvas};
    z-index: -1;
  }

  .neutral {
    z-index: 3;
  } */
`;
