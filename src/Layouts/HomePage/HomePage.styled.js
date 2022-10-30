import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  @media (min-width: 640px) {
    padding: 20px 24px;
  }

  & .content-posts {
    @media (min-width: 960px) {
      width: 640px;
    }
  }

  & .posts {
    min-height: 1000px;
    width: 100%;
  }

  & aside {
    margin-left: 24px;
    margin-top: 0;

    @media (min-width: 960px) {
      display: block;
    }

    @media (max-width: 970px) {
      display: none;
    }
  }

  & .sidebar {
    display: flex;
    height: 100%;
    flex-direction: column;
    width: inherit;
  }

  & .create-community {
    margin-top: 16px;
    width: 312px;
  }

  & footer {
    flex: 1 1 auto;
    position: relative;
    width: inherit;
  }
`
export const MainContainer = styled.div`
  z-index: 3;

  & .main {
    max-width: 100%;
  }
`