import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import { BrowserRouter } from "react-router-dom";

import ForgetPassword from "./ForgetPassword";
// Import themes
import darkTheme from "Theme/darkTheme";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

// Import theme provider from styled components
import { ThemeProvider } from "styled-components";
describe("ForgetPassword section", () => {
  it("renders ForgetPassword component", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={{ ...defaultTheme, ...lightTheme }}>
          <ForgetPassword />
        </ThemeProvider>
      </BrowserRouter>
    );
  });
});
