import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-top: 30px;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  overflow-x: hidden;

  aside {
    margin-left: 24px;
    margin-top: 0;

    @media (min-width: 960px) {
      display: block;
    }

    @media (max-width: 970px) {
      display: none;
    }
  }

  // footer styles
  footer {
    flex: 1 1 auto;
    position: relative;
    width: inherit;
  }
`;
export const MainContainer = styled.div`
  @media (max-width: 960px) {
    width: 100%;
  }
`;
export const Main = styled.div`
  max-width: 100%;
`;
export const AppHeader = styled.header`
  background-color: ${({ theme }) => theme.canvas};
  /* min-height: 48vh; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const AppContainer = styled.div`
  text-align: center;
`;
export const ContentPost = styled.div`
  width: 100%;
  min-width: 640px;

  @media (max-width: 970px) {
    width: 95%;
  }
  @media (max-width: 640px) {
    width: 100%;
    min-width: 100%;
  }
`;
export const Sidebar = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  width: inherit;
`;
// create community styles
export const CreateCommunity = styled.div`
  margin-top: 16px;
  width: 312px;
`;
// recent posts styles
export const RecentPostsContainer = styled.div`
  margin-top: 16px;
  width: 312px;
`;
export const ChildFooter = styled.div`
  position: sticky;
  top: 57px;
`;
export const ScrollBtn = styled.div`
  top: calc(100vh - 8px);
  display: flex;
  margin-top: 45px;
  justify-content: center;
  text-align: center;
  transform: translateY(-100%);
`;
