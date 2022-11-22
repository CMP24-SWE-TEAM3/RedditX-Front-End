import { shallow } from "enzyme";

import SignUpSecondScreen from "./SignUpSecondScreen";
import { BrowserRouter, Routes } from "react-router-dom";

import { screen, render, fireEvent, waitFor } from "@testing-library/react";

import { ThemeProvider } from "styled-components";

import darkTheme from "Theme/darkTheme";

const validPassword = false;
const validUserName = false;
const userNameScreen = false;
const secondScreen = false;
const initialFocus = false;
const initialFocus2 = false;
const notRobot = false;
const passwordStrength = 5;
const setValidPassword = jest.fn();
const setModalShowLogIn = jest.fn();
const setFormFields = jest.fn();
const setUserNameScreen = jest.fn();
const setValidUserName = jest.fn();
const setSecondScreen = jest.fn();
const setInitialFocus = jest.fn();
const setInitialFocus2 = jest.fn();
const setErrMsg = jest.fn();
const setNotRobot = jest.fn();
const setPasswordStrength = jest.fn();
const setModalShowSignUp = jest.fn();
const setModalAfterSignUp = jest.fn();

const defaultFormFields = {
  userName: "",
  password: "",
  email: "",
};

describe("SignUpSecondScreen Layout", () => {
  it("this is a test for SignUpSecondScreen Layout", () => {
    expect(
      shallow(
        <BrowserRouter>
          <Routes>
            <SignUpSecondScreen
              setValidPassword={setValidPassword}
              setModalShowLogIn={setModalShowLogIn}
              setFormFields={setFormFields}
              setUserNameScreen={setUserNameScreen}
              setValidUserName={setValidUserName}
              setSecondScreen={setSecondScreen}
              setInitialFocus={setInitialFocus}
              setInitialFocus2={setInitialFocus2}
              setErrMsg={setErrMsg}
              setNotRobot={setNotRobot}
              setPasswordStrength={setPasswordStrength}
              setModalShowSignUp={setModalShowSignUp}
              setModalAfterSignUp={setModalAfterSignUp}
              formFields={defaultFormFields}
            />
          </Routes>
        </BrowserRouter>
      )
    ).toMatchSnapshot();
  });

  test("username-error shouldn't be found", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <SignUpSecondScreen
            setValidPassword={setValidPassword}
            setModalShowLogIn={setModalShowLogIn}
            setFormFields={setFormFields}
            setUserNameScreen={setUserNameScreen}
            setValidUserName={setValidUserName}
            setSecondScreen={setSecondScreen}
            setInitialFocus={setInitialFocus}
            setInitialFocus2={setInitialFocus2}
            setErrMsg={setErrMsg}
            setNotRobot={setNotRobot}
            setPasswordStrength={setPasswordStrength}
            setModalShowSignUp={setModalShowSignUp}
            setModalAfterSignUp={setModalAfterSignUp}
            formFields={defaultFormFields}
          />
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(screen.queryByTestId("username-error")).not.toBeVisible();
  });


  test("username-error should be not found", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <SignUpSecondScreen
            setValidPassword={setValidPassword}
            setModalShowLogIn={setModalShowLogIn}
            setFormFields={setFormFields}
            setUserNameScreen={setUserNameScreen}
            setValidUserName={setValidUserName}
            setSecondScreen={setSecondScreen}
            setInitialFocus={setInitialFocus}
            setInitialFocus2={setInitialFocus2}
            setErrMsg={setErrMsg}
            setNotRobot={setNotRobot}
            setPasswordStrength={setPasswordStrength}
            setModalShowSignUp={setModalShowSignUp}
            setModalAfterSignUp={setModalAfterSignUp}
            formFields={defaultFormFields}
          />
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

  test("password-input should be found", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <SignUpSecondScreen
            validPassword={validPassword}
            validUserName={validUserName}
            userNameScreen={userNameScreen}
            secondScreen={secondScreen}
            initialFocus={initialFocus}
            initialFocus2={initialFocus2}
            notRobot={notRobot}
            passwordStrength={passwordStrength}
            setValidPassword={setValidPassword}
            setModalShowLogIn={setModalShowLogIn}
            setFormFields={setFormFields}
            setUserNameScreen={setUserNameScreen}
            setValidUserName={setValidUserName}
            setSecondScreen={setSecondScreen}
            setInitialFocus={setInitialFocus}
            setInitialFocus2={setInitialFocus2}
            setErrMsg={setErrMsg}
            setNotRobot={setNotRobot}
            setPasswordStrength={setPasswordStrength}
            setModalShowSignUp={setModalShowSignUp}
            setModalAfterSignUp={setModalAfterSignUp}
            formFields={defaultFormFields}
          />
        </ThemeProvider>
      </BrowserRouter>
    );
    const userNameInput = screen.getByTestId("password");
    expect(userNameInput).toBeInTheDocument();
  });
});
