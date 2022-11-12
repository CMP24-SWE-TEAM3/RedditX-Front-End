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
import { AuthProvider } from "Features/Authentication/Contexts/Authentication";

// TODO: remove this dummy page
import DummyPage from "Pages/DummyPage/DummyPage";

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
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  handleToggleTheme={handleToggleTheme}
                  theme={theme.id}
                />
              }
            />
            <Route path="subreddit" element={<SubReddit />} />
            <Route path="category/*" element={<CommunityLeaderBoard />} />
            <Route path="index-page" element={<IndexPage />} />
            <Route path="search/*" element={<Search/>}/>
            <Route path="submit" element={<CreatePost />} />
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
