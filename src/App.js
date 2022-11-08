/* eslint-disable no-unused-vars */
// Import react and hooks
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

// Import Images
import logo from "./logo.svg";

// Import styled components
import * as styles from "App.styled";

// Import themes
import darkTheme from "Theme/darkTheme";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

// Import theme provider from styled components
import { ThemeProvider } from "styled-components";

// Import bootstrap
import { SubReddit } from "Features/Subreddit";
import { Button } from "react-bootstrap";

import TestHome from "Features/Authentication/Pages/TestHome";

import LogInPage from "Features/Authentication/Pages/LogInPage/LogInPage";

import SignUpPage from "Features/Authentication/Pages/SignUpPage/SignUpPage";

import ForgetUserNamePage from "Features/Authentication/Pages/ForgetUserNamePage/ForgetUserNamePage";

import NewPasswordPage from "Features/Authentication/Pages/NewPasswordPage/NewPasswordPage";

import ForgetPasswordPage from "Features/Authentication/Pages/ForgetPasswordPage/ForgetPasswordPage";

import { AuthProvider } from "Features/Authentication/Contexts/Authentication";
import { CreatePost } from "Features/Post";
import Search from "Features/Search/Pages/Search/Search";

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
      {/*<AuthProvider>
        <Button onClick={handleToggleTheme}>Toggle rome</Button>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </AuthProvider>
      */}
      <>
        <BrowserRouter>
          <SubReddit />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
