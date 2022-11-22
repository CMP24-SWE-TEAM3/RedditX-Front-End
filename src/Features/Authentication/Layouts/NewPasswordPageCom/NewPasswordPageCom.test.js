import { shallow } from "enzyme";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import NewPasswordPageCom from "./NewPasswordPageCom";

import { ThemeProvider } from "styled-components";

import darkTheme from "Theme/darkTheme";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("NewPasswordPageCom Component", () => {
  it("this is a test for NewPasswordPageCom Component", () => {
    expect(shallow(<NewPasswordPageCom />)).toMatchSnapshot();
  });

  test("password-error shouldn't be found", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <NewPasswordPageCom />
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(screen.queryByTestId("password-error")).not.toBeVisible();
  });

  test("password-error should be found", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <NewPasswordPageCom />
        </ThemeProvider>
      </BrowserRouter>
    );
    const passwordInput = screen.getByTestId("password");

    fireEvent.change(passwordInput, {
      target: { value: "M" },
    });

    passwordInput.focus();

    const passwordError = screen.getByTestId("password-error");

    await waitFor(() => {
      expect(passwordError).toBeVisible();
    });
  });
  test("password-error should be not found", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <NewPasswordPageCom />
        </ThemeProvider>
      </BrowserRouter>
    );
    const passwordInput = screen.getByTestId("password");
    const verifyPasswordInput = screen.getByTestId("verify-password");

    fireEvent.change(passwordInput, {
      target: { value: "Mohamedromee" },
    });
    fireEvent.change(verifyPasswordInput, {
      target: { value: "Mohamedro" },
    });

    verifyPasswordInput.focus();
    const passwordError = screen.getByTestId("password-error");
    const verifyPasswordError = screen.getByTestId("verify-password-error");

    await waitFor(() => {
      expect(passwordError).not.toBeVisible();
    });
    expect(verifyPasswordError).toBeVisible();
  });
  test("password should match", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <NewPasswordPageCom />
        </ThemeProvider>
      </BrowserRouter>
    );
    const passwordInput = screen.getByTestId("password");
    const verifyPasswordInput = screen.getByTestId("verify-password");

    fireEvent.change(passwordInput, {
      target: { value: "Mohamedromee" },
    });
    fireEvent.change(verifyPasswordInput, {
      target: { value: "Mohamedromee" },
    });

    verifyPasswordInput.focus();
    const passwordError = screen.getByTestId("password-error");
    const verifyPasswordError = screen.getByTestId("verify-password-error");

    await waitFor(() => {
      expect(passwordError).not.toBeVisible();
    });
    expect(verifyPasswordError).not.toBeVisible();
  });

  test("password-input should be found", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <NewPasswordPageCom />
        </ThemeProvider>
      </BrowserRouter>
    );
    const passwordInput = screen.getByTestId("password");
    expect(passwordInput).toBeInTheDocument();
  });
});
