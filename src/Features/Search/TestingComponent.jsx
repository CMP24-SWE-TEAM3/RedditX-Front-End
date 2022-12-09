// Import react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Import themes
import darkTheme from "Theme/darkTheme";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

// Import theme provider from styled components
import { ThemeProvider } from "styled-components";
import { SafeContextProvider } from "./Contexts/SafeSearchContext/Safe-context";
import { SearchContextProvider } from "./Contexts/SearchWordContext/Search-context";

const TestingComponent = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={{ ...defaultTheme, ...lightTheme }}>
        <SearchContextProvider>
          <SafeContextProvider>{children}</SafeContextProvider>
        </SearchContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default TestingComponent;
