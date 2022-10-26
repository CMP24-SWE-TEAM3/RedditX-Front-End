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
      {/* <styles.AppContainer> */}
        {/* <styles.AppHeader>
          <styles.AppLogo src={logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          <>
          <BrowserRouter>
            <SubReddit />
          </BrowserRouter>
          </>
          {/* <styles.AppLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </styles.AppLink>
          <Button onClick={handleToggleTheme}>
            Toggle theme
          </Button>
        </styles.AppHeader> */}
      {/* </styles.AppContainer> */}
    </ThemeProvider>
  );
}

export default App;
