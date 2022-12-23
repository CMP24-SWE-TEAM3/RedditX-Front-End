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
import ModalCommunity from "./ModalCommunity";

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

describe("Modal Community Component", () => {
  const setShowModal = jest.fn();
  const closeFunc = jest.fn();
  const showModal = jest.fn();
  shallow(
    <ModalCommunity
      showModal={showModal}
      setShowModal={setShowModal}
      close={closeFunc}
    />
  );
  test("Modal Community  should be appeard", async () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider theme={darkTheme}>
            <ModalCommunity
              showModal={showModal}
              setShowModal={setShowModal}
              close={closeFunc}
            />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    expect(screen.queryByTestId("createModalId")).not.toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });
});
