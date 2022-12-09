// Import react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Import themes
import darkTheme from "Theme/darkTheme";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

// Import theme provider from styled components
import { ThemeProvider } from "styled-components";
// import FlairContext from "Features/Moderator/Contexts/Safe-context";
import { SafeContextProvider } from "./Contexts/SafeSearchContext/Safe-context";
import { SearchContextProvider } from "./Contexts/SearchWordContext/Search-context";
import { EditContextProvider } from "Features/Moderator/Contexts/Safe-context";
const TestingComponent = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={{ ...defaultTheme, ...lightTheme }}>
        <EditContextProvider>
          <SearchContextProvider>
            <SafeContextProvider>{children}</SafeContextProvider>
          </SearchContextProvider>
        </EditContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default TestingComponent;
