import React from "react";
import { BrowserRouter, Routes } from "react-router-dom/dist";
import darkTheme from "Theme/darkTheme";
import { ThemeProvider } from "styled-components";
import { screen, render } from "@testing-library/react";
import { shallow } from "enzyme";
// Import contexts
import {
  AuthProvider,
  useAuth,
} from "Features/Authentication/Contexts/Authentication";

// import Components
import SideBar from "./SideBar";
import { Sidebar } from "Pages/HomePage/HomePage.styled";

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

describe("SideBar Component", () => {
  const showBtn = jest.fn();
  const showSideBar = jest.fn();
  const setShowSideBar = jest.fn();

  shallow(
    <Sidebar
      showButton={showBtn}
      showSideBar={showSideBar}
      setShowSideBar={setShowSideBar}
    />
  );
  test("SideBar should be appeard", async () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider theme={darkTheme}>
            <SideBar
              showButton={showBtn}
              showSideBar={showSideBar}
              setShowSideBar={setShowSideBar}
            />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    expect(screen.queryByTestId("sideBarId")).not.toBeInTheDocument();
  });
});
