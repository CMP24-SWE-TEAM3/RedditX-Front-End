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


  //@media (min-width: 640px) {
  //  padding: 20px 24px;
  //  width:95%
  //  
  //}

  & .content-posts {
    width: 100%;
    min-width: 640px;

    @media (max-width: 970px) {
      width:95%;
      //padding-top:48px;

    }
    @media(max-width:640px ){
      width:100%;
      min-width: 100%;
    }
  }

  //& .posts {
  //  min-height: 1000px;
  //  width: 100%;
  //} 

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

  .sidebar {
    display: flex;
    height: 100%;
    flex-direction: column;
    width: inherit;
  }
  
  // create community styles
  .create-community {
    margin-top: 16px;
    width: 312px;
  }

  // recent posts styles
  .recent-posts {
    margin-top: 16px;
    width: 312px;
  }
  
  // footer styles
  & footer {
    flex: 1 1 auto;
    position: relative;
    width: inherit;
  }

  & .child-footer {
    position: sticky;
    top: 57px;
  }

  & .scroll-but {
    top: calc(100vh - 8px);
    display: flex;
    margin-top: 45px;
    justify-content: center;
    text-align: center;
    transform: translateY(-100%);
  }
`
export const MainContainer = styled.div`
  @media (max-width: 960px) {
    width: 100%;
  }

  & .main {
    max-width: 100%;
  }
`