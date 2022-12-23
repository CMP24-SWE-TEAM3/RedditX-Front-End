import React from "react";
import { BrowserRouter, Routes } from "react-router-dom/dist";
import darkTheme from "Theme/darkTheme";
import { ThemeProvider } from "styled-components";
import { screen, render } from "@testing-library/react";
// Import contexts
import {
  AuthProvider,
  useAuth,
} from "Features/Authentication/Contexts/Authentication";

// import Components
import Navigation from "./Navigation";

jest.mock("Features/Authentication/Contexts/Authentication", () => ({
  __esModule: true, // this property makes it work
  useAuth: function () {
    return {
      getToken: jest.fn().mockReturnValue("token"),
    };
  },
  AuthProvider: ({ children }) => {
    return (
      <mock-authprovider data-testid="auth-provider">
        {children}
      </mock-authprovider>
    );
  },
}));

describe("Navbar Layuot", () => {
  test("Navbar Layout should be appeard", async () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider theme={darkTheme}>
            <Navigation />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    expect(screen.queryByTestId("searchRedditId")).not.toBeInTheDocument();
  });
});
