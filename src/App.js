// Import react and hooks
import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";

// Import Images
// import logo from "./logo.svg";

// Import styled components
// import * as styles from "App.styled";

// Import themes
import darkTheme from "Theme/darkTheme";
import lightTheme from "Theme/lightTheme";
import defaultTheme from "Theme/defaultTheme";

// Import theme provider from styled components
import { ThemeProvider } from "styled-components";

// Import bootstrap
import { Button } from "react-bootstrap";
import Search from "Features/Search/Pages/Search/Search";

import TestHome from "Features/Authentication/Pages/TestHome";

import LogInPage from "Features/Authentication/Pages/LogInPage/LogInPage";

import SignUpPage from "Features/Authentication/Pages/SignUpPage/SignUpPage";

import ForgetUserNamePage from "Features/Authentication/Pages/ForgetUserNamePage/ForgetUserNamePage";

import ForgetPasswordPage from "Features/Authentication/Pages/ForgetPasswordPage/ForgetPasswordPage";

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
      <Button onClick={handleToggleTheme}>Toggle theme</Button>
      {/* <BrowserRouter>
        <Search />
      </BrowserRouter> */}
      <ForgetPasswordPage />
    </ThemeProvider>
  );
}

export default App;
