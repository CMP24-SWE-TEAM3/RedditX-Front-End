import { render, screen, fireEvent } from "@testing-library/react";

// Import react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import context provider
import { AuthProvider } from "Features/Authentication/Contexts/Authentication";

// Import themes
import darkTheme from "Theme/darkTheme";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

// Import theme provider from styled components
import { ThemeProvider } from "styled-components";

// Import components
import CreatePost from "./CreatePost";

describe("Create post page", () => {
  it("should render without crashing", () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <ThemeProvider theme={{ ...defaultTheme, ...lightTheme }}>
            <CreatePost />
          </ThemeProvider>
        </BrowserRouter>
      </AuthProvider>
    );
  });
});
