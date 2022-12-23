import React from "react";
import { BrowserRouter, Routes } from "react-router-dom/dist";
import darkTheme from "Theme/darkTheme";
import { ThemeProvider } from "styled-components";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { shallow } from "enzyme";
// Import contexts
import {
  AuthProvider,
  useAuth,
} from "Features/Authentication/Contexts/Authentication";

// import Components
import DropDownRight from "./DropDownRight";

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

describe("Drop Down Right Component", () => {
  const toggle = jest.fn();
  shallow(<DropDownRight toggleMode={toggle} />);
  test("Drop Down Right should be appeard", async () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider theme={darkTheme}>
            <DropDownRight toggleMode={toggle} />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    expect(screen.queryByTestId("OnlineStatusId")).not.toBeInTheDocument();
  });
});
