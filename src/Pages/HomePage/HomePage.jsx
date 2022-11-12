// imports
import React from "react";
import { Container, MainContainer,AppContainer,AppHeader } from "./HomePage.styled";
import CreatePost from "Layouts/CreatePost/CreatePost";
import TopCommunities from "Layouts/CommunityCard/CommunityCard";
import PopularPosts from "Layouts/PopularPosts/PopularPosts";
import CreatePostSideBar from "Layouts/CreatePostSideBar/CreatePostSideBar";
import Footer from "Layouts/Footer/Footer";
import ScrollButton from "Components/ScrollButton/ScrollButton";
import RecentPosts from "Layouts/RecentPosts/RecentPosts";

/**
 * Component that displays a list of layouts such as  posts , navigation , and sidebar.
 *
 * @returns {React.Component} returns an instance of HomePage with a list of layouts created
 */

const HomePage = ({ handleToggleTheme, theme}) => {

  return (
    <>
      <AppContainer>
        <AppHeader>

          {/* <Navbar
            toggleMode={handleToggleTheme}
            theme={theme}
            modalShowLogIn={modalShowLogIn}
            setModalShowLogIn={setModalShowLogIn}
          /> */}
          <MainContainer>
            <div className="main" />
            <Container>
              <div className={"content-posts"}>
                <CreatePost />
                <PopularPosts />
                {/*<div className={'posts'}>*/}
                {/*</div>*/}
              </div>
              <aside>
                <div className={"sidebar"}>
                  <TopCommunities />

                  <div className={"create-community"}>
                    <CreatePostSideBar />
                  </div>
                  <div className={"recent-posts"}>
                    <div>
                      <RecentPosts />
                    </div>
                  </div>
                  <footer>
                    <div className={"child-footer"}>
                      <Footer />
                    </div>
                    <div className={"scroll-but"}>
                      <ScrollButton />
                    </div>
                  </footer>
                </div>
              </aside>
            </Container>
          </MainContainer>
        </AppHeader>
      </AppContainer>
    </>
  );
};

export default HomePage;
