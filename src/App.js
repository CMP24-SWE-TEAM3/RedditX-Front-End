/* eslint-disable no-unused-vars */
// Import react and hooks
import React, { useState } from "react";

//////////////////////////////////////////////////////////////

//Dummy imports

import VotingBar from "Features/Post/Components/VotingBar/VotingBar";
import PostShape from "Features/Post/Layouts/PostShape/PostShape";

//////////////////////////////////////////////////////////////

// Import react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import themes
import darkTheme from "Theme/darkTheme";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

// Import theme provider from styled components
import { ThemeProvider } from "styled-components";

// Import bootstrap components
import { Button } from "react-bootstrap";

// Import pages
import { SubReddit, CommunityLeaderBoard, IndexPage } from "Features/Subreddit";
import { CreatePost } from "Features/Post";
import Post from "Features/Post/Pages/Post/Post";
import {
  ForgetPasswordPage,
  ForgetUserNamePage,
  LogInPage,
  SignUpPage,
  NewPasswordPage,
} from "Features/Authentication";
import Search from "Features/Search/Pages/Search/Search";
import HomePage from "Pages/HomePage/HomePage";

// Import contexts
import {
  AuthProvider,
  useAuth,
} from "Features/Authentication/Contexts/Authentication";

// TODO: remove this dummy page

import AfterSignUp from "Features/Authentication/Layouts/AfterSignUp/AfterSignUp";
import AfterSignUpModal from "Features/Authentication/Layouts/AfterSignUpModal/AfterSignUpModal";
import LogInScreen from "Features/Authentication/Layouts/LogInScreen/LogInScreen";
import DummyPage from "Pages/DummyPage/DummyPage";
import Navigation from "Layouts/Navigation/Navigation";
import LogInVerticalModal from "Features/Authentication/Layouts/LogInVerticalModal/LogInVerticalModal";
import SignUpVerticalModal from "Features/Authentication/Layouts/SignUpVerticalModal/SignUpVerticalModal";

/**
 * The main app of our application it handles routing
 *
 * @returns {React.Component} The app component
 */
function App() {
  // State to store the current theme of the website
  const [theme, setTheme] = useState({ ...defaultTheme, ...lightTheme });

  /**
   * Function to toggle the theme of the website
   * It will change the theme from light to dark and vice versa
   */
  const handleToggleTheme = () => {
    if (theme.id === "dark") {
      setTheme({ ...defaultTheme, ...lightTheme });
    } else {
      setTheme({ ...defaultTheme, ...darkTheme });
    }
  };

  const [modalShowSignUp, setModalShowSignUp] = React.useState(false);
  const [modalShowLogIn, setModalShowLogIn] = React.useState(false);
  const [modalAfterSignUp, setModalAfterSignUp] = React.useState(false);

  const auth = useAuth();
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <LogInVerticalModal
            show={modalShowLogIn}
            onHide={() => setModalShowLogIn(false)}
            setModalShowLogIn={setModalShowLogIn}
          />
          <SignUpVerticalModal
            show={modalShowSignUp}
            onHide={() => setModalShowSignUp(false)}
            setModalShowSignUp={setModalShowSignUp}
            setModalAfterSignUp={setModalAfterSignUp}
          />
          <AfterSignUpModal
            show={modalAfterSignUp}
            setModalAfterSignUp={setModalAfterSignUp}
            onHide={() => setModalAfterSignUp(false)}
          />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navigation
                    toggleMode={handleToggleTheme}
                    theme={theme.id}
                    modalShowLogIn={modalShowLogIn}
                    setModalShowLogIn={setModalShowLogIn}
                    modalShowSignUp={modalShowSignUp}
                    setModalShowSignUp={setModalShowSignUp}
                    modalAfterSignUp={modalAfterSignUp}
                    setModalAfterSignUp={setModalAfterSignUp}
                  />
                  <HomePage
                    handleToggleTheme={handleToggleTheme}
                    theme={theme.id}
                  />
                  {/* <PostShape></PostShape> */}
                </>
              }
            />
            <Route
              path="subreddit/:id"
              element={
                <>
                  <Navigation
                    toggleMode={handleToggleTheme}
                    theme={theme.id}
                    modalShowLogIn={modalShowLogIn}
                    setModalShowLogIn={setModalShowLogIn}
                    modalShowSignUp={modalShowSignUp}
                    setModalShowSignUp={setModalShowSignUp}
                    modalAfterSignUp={modalAfterSignUp}
                    setModalAfterSignUp={setModalAfterSignUp}
                  />
                  <SubReddit />
                </>
              }
            />
            <Route
              path="category/:categoryType/*"
              element={
                <>
                  <Navigation
                    toggleMode={handleToggleTheme}
                    theme={theme.id}
                    modalShowLogIn={modalShowLogIn}
                    setModalShowLogIn={setModalShowLogIn}
                    modalShowSignUp={modalShowSignUp}
                    setModalShowSignUp={setModalShowSignUp}
                    modalAfterSignUp={modalAfterSignUp}
                    setModalAfterSignUp={setModalAfterSignUp}
                  />
                  <CommunityLeaderBoard />
                </>
              }
            />
            <Route
              path="index-page/:indexLetter/*"
              element={
                <>
                  <Navigation
                    toggleMode={handleToggleTheme}
                    theme={theme.id}
                    modalShowLogIn={modalShowLogIn}
                    setModalShowLogIn={setModalShowLogIn}
                    modalShowSignUp={modalShowSignUp}
                    setModalShowSignUp={setModalShowSignUp}
                    modalAfterSignUp={modalAfterSignUp}
                    setModalAfterSignUp={setModalAfterSignUp}
                  />
                  <IndexPage />
                </>
              }
            />
            <Route
              path="search/*"
              element={
                <>
                  <Navigation
                    toggleMode={handleToggleTheme}
                    theme={theme.id}
                    modalShowLogIn={modalShowLogIn}
                    setModalShowLogIn={setModalShowLogIn}
                    modalShowSignUp={modalShowSignUp}
                    setModalShowSignUp={setModalShowSignUp}
                    modalAfterSignUp={modalAfterSignUp}
                    setModalAfterSignUp={setModalAfterSignUp}
                  />
                  <Search />
                </>
              }
            />
            <Route
              path="submit"
              element={
                <>
                  <Navigation
                    toggleMode={handleToggleTheme}
                    theme={theme.id}
                    modalShowLogIn={modalShowLogIn}
                    setModalShowLogIn={setModalShowLogIn}
                    modalShowSignUp={modalShowSignUp}
                    setModalShowSignUp={setModalShowSignUp}
                    modalAfterSignUp={modalAfterSignUp}
                    setModalAfterSignUp={setModalAfterSignUp}
                  />
                  <CreatePost />
                </>
              }
            />
            <Route path="login" element={<LogInPage />} />
            <Route path="register" element={<SignUpPage />} />
            <Route path="forget-password" element={<ForgetPasswordPage />} />
            <Route path="forget-username" element={<ForgetUserNamePage />} />
            <Route
              path="user/reset-password/:token"
              element={<NewPasswordPage />}
            />
            <Route
              path="post"
              element={
                <>
                  <Navigation
                    toggleMode={handleToggleTheme}
                    theme={theme.id}
                    modalShowLogIn={modalShowLogIn}
                    setModalShowLogIn={setModalShowLogIn}
                    modalShowSignUp={modalShowSignUp}
                    setModalShowSignUp={setModalShowSignUp}
                    modalAfterSignUp={modalAfterSignUp}
                    setModalAfterSignUp={setModalAfterSignUp}
                  />
                  <Post />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
