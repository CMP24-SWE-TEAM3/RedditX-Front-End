import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import ForgetUserName from "./ForgetUserName";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import darkTheme from "Theme/darkTheme";


const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("ForgetUserName Layout", () => {
  test("email-error shouldn't be found", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <ForgetUserName />
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(screen.queryByTestId("email-error")).not.toBeVisible();
  });

  test("email-error should be found", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <ForgetUserName />
        </ThemeProvider>
      </BrowserRouter>
    );
    const emailInput = screen.getByTestId("email");

    fireEvent.change(emailInput, {
      target: { value: "M" },
    });

    emailInput.focus();

    const emailError = screen.getByTestId("email-error");

    await waitFor(() => {
      expect(emailError).toBeVisible();
    });
  });
  test("email-error should be not found", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <ForgetUserName />
        </ThemeProvider>
      </BrowserRouter>
    );
    const emailInput = screen.getByTestId("email");

    fireEvent.change(emailInput, {
      target: { value: "Mgfdgs@gmail.com" },
    });

    const emailError = screen.getByTestId("email-error");

    await waitFor(() => {
      expect(emailError).not.toBeVisible();
    });
  });

  test("email-input should be found", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <ForgetUserName />
        </ThemeProvider>
      </BrowserRouter>
    );
    const emailInput = screen.getByTestId("email");
    expect(emailInput).toBeInTheDocument();
  });

});
