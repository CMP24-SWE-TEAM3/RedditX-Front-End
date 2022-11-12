// imports
import React from "react";
import { Container, MainContainer } from "./HomePage.styled";
import CreatePost from "Layouts/CreatePost/CreatePost";
import TopCommunities from "Layouts/CommunityCard/CommunityCard";
import PopularPosts from "Layouts/PopularPosts/PopularPosts";
import CreatePostSideBar from "Layouts/CreatePostSideBar/CreatePostSideBar";
import Footer from "Layouts/Footer/Footer";
import ScrollButton from "Components/ScrollButton/ScrollButton";
import RecentPosts from "Layouts/RecentPosts/RecentPosts";
import Navigation from "Layouts/Navigation/Navigation";
import Navbar from "Layouts/Navbar/Navbar";
import * as styles from "App.styled";
import LogInVerticalModal from "Features/Authentication/Layouts/LogInVerticalModal/LogInVerticalModal";
import SignUpVerticalModal from "../../Features/Authentication/Layouts/SignUpVerticalModal/SignUpVerticalModal";

/**
 * Component that displays a list of layouts such as  posts , navigation , and sidebar.
 *
 * @returns {React.Component} returns an instance of HomePage with a list of layouts created
 */

const HomePage = ({ handleToggleTheme, theme }) => {
  const [modalShowSignUp, setModalShowSignUp] = React.useState(false);
  const [modalShowLogIn, setModalShowLogIn] = React.useState(false);
  const [modalAfterSignUp, setModalAfterSignUp] = React.useState(false);

  return (
    <>
      <styles.AppContainer>
        <styles.AppHeader>
          <Navigation
            toggleMode={handleToggleTheme}
            theme={theme}
            modalShowLogIn={modalShowLogIn}
            setModalShowLogIn={setModalShowLogIn}
            modalShowSignUp={modalShowSignUp}
            setModalShowSignUp={setModalShowSignUp}
            modalAfterSignUp={modalAfterSignUp}
            setModalAfterSignUp={setModalAfterSignUp}
          />
          {/* <Navbar
            toggleMode={handleToggleTheme}
            theme={theme}
            modalShowLogIn={modalShowLogIn}
            setModalShowLogIn={setModalShowLogIn}
          /> */}
          <MainContainer>
            <div className="main" />
            <Container>
              <LogInVerticalModal
                show={modalShowLogIn}
                onHide={() => setModalShowLogIn(false)}
                setModalShowLogIn={setModalShowLogIn}/>
              <SignUpVerticalModal
                  show={modalShowSignUp}
                  onHide={() => setModalShowSignUp(false)}
                  setModalShowSignUp={setModalShowSignUp}
              />
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
        </styles.AppHeader>
      </styles.AppContainer>
    </>
  );
};

export default HomePage;
