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
import RecentPosts from "./RecentPosts";

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

describe("Recent Posts Layout", () => {
  test("Recent Posts should be appeard", async () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider theme={darkTheme}>
            <RecentPosts />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    const test = screen.getByText("Home");
    expect(test).toBeInTheDocument();
  });
});
