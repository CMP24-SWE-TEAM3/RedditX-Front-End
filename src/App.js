/* eslint-disable no-unused-vars */
// Import react and hooks
import React, { useState } from "react";

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
import Navigation from "./Layouts/Navigation/Navigation";
import LogInVerticalModal from "Features/Authentication/Layouts/LogInVerticalModal/LogInVerticalModal";
import SignUpVerticalModal from "Features/Authentication/Layouts/SignUpVerticalModal/SignUpVerticalModal";
import AfterSignUp from "Features/Authentication/Layouts/AfterSignUp/AfterSignUp";
import AfterSignUpModal from "Features/Authentication/Layouts/AfterSignUpModal/AfterSignUpModal";
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
                </>
              }
            />
            <Route
              path="subreddit"
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
              path="category/*"
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
              path="index-page"
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
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
