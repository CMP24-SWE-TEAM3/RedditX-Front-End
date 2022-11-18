import { shallow } from "enzyme";

import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import darkTheme from "Theme/darkTheme";

import { BrowserRouter } from "react-router-dom";

import LogInScreen from "./LogInScreen";




const defaultFormFields = {
  userName: "",
  password: "",
  email: "",
};

const validPassword = false;
const validName = false;
const userNameScreen = false;
const passwordScreen = false;
const initialFocus = false;
const initialFocus2 = false;
const setValidPassword = jest.fn();
const setModalShowLogIn = jest.fn();
const setFormFields = jest.fn();
const setUserNameScreen = jest.fn();
const setValidName = jest.fn();
const setPasswordScreen = jest.fn();
const setInitialFocus = jest.fn();
const setInitialFocus2 = jest.fn();
const setErrMsg = jest.fn();

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("LogInScreen Layout", () => {
  const wrapper = shallow(
    <BrowserRouter>
      <LogInScreen
        setFormFields={setFormFields}
        formFields={defaultFormFields}
        validName={validName}
        setValidName={setValidName}
        validPassword={validPassword}
        setValidPassword={setValidPassword}
        userNameScreen={userNameScreen}
        setUserNameScreen={setUserNameScreen}
        passwordScreen={passwordScreen}
        setPasswordScreen={setPasswordScreen}
        initialFocus={initialFocus}
        initialFocus2={initialFocus2}
        setInitialFocus={setInitialFocus}
        setInitialFocus2={setInitialFocus2}
        setModalShowLogIn={setModalShowLogIn}
        setErrMsg={setErrMsg}
      />
    </BrowserRouter>
  );

  const userNameInput = wrapper.childAt(0).dive().find('[id="login-username"]');
  const userNameError = wrapper.childAt(0).dive().find('[id="username-error"]');
  const passwordInput = wrapper.childAt(0).dive().find('[id="login-password"]');
  const forgetUserName = wrapper
    .childAt(0)
    .dive()
    .find('[id="forgetUserName"]');
  const forgetPassword = wrapper
    .childAt(0)
    .dive()
    .find('[id="forgetPassword"]');


  it("this is a test for userName field", () => {
    userNameInput.simulate("change", {
      target: { name: "userName", value: "g" },
    });
    expect(userNameError.text()).toEqual(
      "Username must be between 3 and 20 characters"
    );

  

    expect(setValidName).toBeCalled();
    expect(setInitialFocus).toBeCalled();
    expect(setInitialFocus2).not.toBeCalled();
  });

  it("this is a test for password field", () => {
    passwordInput.simulate("change", {
      target: { name: "password", value: "g" },
    });
    expect(setValidPassword).toBeCalled();
    expect(setInitialFocus2).toBeCalled();
    expect(setInitialFocus).not.toBeCalled();
  });

  it("this is a test for forgetUserName link", () => {
    forgetUserName.simulate("click");
    expect(setInitialFocus).toBeCalled();
    expect(setPasswordScreen).toBeCalled();
    expect(setErrMsg).toBeCalled();
    expect(setUserNameScreen).toBeCalled();
  });

  it("this is a test for forgetPassword link", () => {
    forgetPassword.simulate("click");
    expect(setInitialFocus).toBeCalled();
    expect(setPasswordScreen).toBeCalled();
    expect(setErrMsg).toBeCalled();
    expect(setUserNameScreen).toBeCalled();
  });



  test("username-error should be found", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
        <LogInScreen
        setFormFields={setFormFields}
        formFields={defaultFormFields}
        validName={validName}
        setValidName={setValidName}
        validPassword={validPassword}
        setValidPassword={setValidPassword}
        userNameScreen={userNameScreen}
        setUserNameScreen={setUserNameScreen}
        passwordScreen={passwordScreen}
        setPasswordScreen={setPasswordScreen}
        initialFocus={initialFocus}
        initialFocus2={initialFocus2}
        setInitialFocus={setInitialFocus}
        setInitialFocus2={setInitialFocus2}
        setModalShowLogIn={setModalShowLogIn}
        setErrMsg={setErrMsg}
      />
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
  

  test("password-input should be found", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
        <LogInScreen
        setFormFields={setFormFields}
        formFields={defaultFormFields}
        validName={validName}
        setValidName={setValidName}
        validPassword={validPassword}
        setValidPassword={setValidPassword}
        userNameScreen={userNameScreen}
        setUserNameScreen={setUserNameScreen}
        passwordScreen={passwordScreen}
        setPasswordScreen={setPasswordScreen}
        initialFocus={initialFocus}
        initialFocus2={initialFocus2}
        setInitialFocus={setInitialFocus}
        setInitialFocus2={setInitialFocus2}
        setModalShowLogIn={setModalShowLogIn}
        setErrMsg={setErrMsg}
      />
        </ThemeProvider>
      </BrowserRouter>
    );
    const userNameInput = screen.getByTestId("password");
    expect(userNameInput).toBeInTheDocument();
  });
});
