import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import ForgetPassword from "./ForgetPassword";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import darkTheme from "Theme/darkTheme";


const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("ForgetPassword Layout", () => {
  test("email-error shouldn't be found", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <ForgetPassword />
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(screen.queryByTestId("email-error")).not.toBeVisible();
  });

  test("username-error should be found", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <ForgetPassword />
        </ThemeProvider>
      </BrowserRouter>
    );
    const userNameInput = screen.getByTestId("username");

    fireEvent.change(userNameInput, {
      target: { value: "M" },
    });

    userNameInput.focus();

    const userNameError = screen.getByTestId("username-error");

    await waitFor(() => {
      expect(userNameError).toBeVisible();
    });
  });
  test("username-error should be not found", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <ForgetPassword />
        </ThemeProvider>
      </BrowserRouter>
    );
    const userNameInput = screen.getByTestId("username");

    fireEvent.change(userNameInput, {
      target: { value: "Mgfdgs" },
    });

    const userNameError = screen.getByTestId("username-error");

    await waitFor(() => {
      expect(userNameError).not.toBeVisible();
    });
  });

  test("email-input should be found", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <ForgetPassword />
        </ThemeProvider>
      </BrowserRouter>
    );
    const emailInput = screen.getByTestId("email");
    expect(emailInput).toBeInTheDocument();
  });

});
