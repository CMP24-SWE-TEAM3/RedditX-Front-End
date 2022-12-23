import {
  AuthProvider,
  useAuth,
} from "Features/Authentication/Contexts/Authentication";

// Import react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import themes
import darkTheme from "Theme/darkTheme";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

// Import theme provider from styled components
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";

const AuthTesting = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={{ ...defaultTheme, ...lightTheme }}>
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};

const TestingComponent = ({ children }) => {
  return (
    <AuthProvider>
      <AuthTesting>{children}</AuthTesting>
    </AuthProvider>
  );
};

export default TestingComponent;
