import { shallow } from "enzyme";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";

import darkTheme from "Theme/darkTheme";

import ForgetPasswordModal from "./ForgetPasswordModal";

const defaultFormFields = {
  userName: "",
  password: "",
  email: "",
};

const validEmail = false;
const validName = false;
const passwordScreen = false;
const initialFocus = false;
const initialFocus2 = false;
const setValidEmail = jest.fn();
const setFormFields = jest.fn();
const setUserNameScreen = jest.fn();
const setValidName = jest.fn();
const setPasswordScreen = jest.fn();
const setInitialFocus = jest.fn();
const setInitialFocus2 = jest.fn();
const setErrMsg = jest.fn();

describe("ForgetPasswordModal Layout", () => {
  const wrapper = shallow(
    <ForgetPasswordModal
      validEmail={validEmail}
      validName={validName}
      formFields={defaultFormFields}
      passwordScreen={passwordScreen}
      initialFocus={initialFocus}
      initialFocus2={initialFocus2}
      setValidEmail={setValidEmail}
      setFormFields={setFormFields}
      setUserNameScreen={setUserNameScreen}
      setValidName={setValidName}
      setPasswordScreen={setPasswordScreen}
      setInitialFocus={setInitialFocus}
      setInitialFocus2={setInitialFocus2}
      setErrMsg={setErrMsg}
    />
  );
  expect(wrapper).toMatchSnapshot();

  const userNameInput = wrapper.find('[id="username"]');
  const userNameError = wrapper.find('[id="userNameError"]');
  const forgetUserName = wrapper.find('[id="forgetUserName"]');
  const wantLogIn = wrapper.find('[id="wantLogIn"]');
  const emailInput = wrapper.find('[id="email"]');
  const emailError = wrapper.find('[id="emailError"]');

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

  it("this is a test for email field", () => {
    emailInput.simulate("change", { target: { name: "email", value: "gdh" } });
    expect(emailError.text()).toEqual("not a valid email address");
    expect(setValidEmail).toBeCalled();
    expect(setInitialFocus2).toBeCalled();
  });

  it("this is a test for forgetUserName link", () => {
    forgetUserName.simulate("click");
    expect(setInitialFocus).toBeCalled();
    expect(setPasswordScreen).toBeCalled();
    expect(setErrMsg).toBeCalled();
    expect(setUserNameScreen).toBeCalled();
  });

  it("this is a test for login link", () => {
    wantLogIn.simulate("click");
    expect(setInitialFocus).toBeCalled();
    expect(setPasswordScreen).toBeCalled();
    expect(setUserNameScreen).toBeCalled();
  });

  test("username-error shouldn't be found", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <ForgetPasswordModal
          validEmail={validEmail}
          validName={validName}
          formFields={defaultFormFields}
          passwordScreen={passwordScreen}
          initialFocus={initialFocus}
          initialFocus2={initialFocus2}
          setValidEmail={setValidEmail}
          setFormFields={setFormFields}
          setUserNameScreen={setUserNameScreen}
          setValidName={setValidName}
          setPasswordScreen={setPasswordScreen}
          setInitialFocus={setInitialFocus}
          setInitialFocus2={setInitialFocus2}
          setErrMsg={setErrMsg}
        />
      </ThemeProvider>
    );
    expect(screen.queryByTestId("email-error")).not.toBeVisible();
  });

 

  test("username-error should be not found", async () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <ForgetPasswordModal
          validEmail={validEmail}
          validName={validName}
          formFields={defaultFormFields}
          passwordScreen={passwordScreen}
          initialFocus={initialFocus}
          initialFocus2={initialFocus2}
          setValidEmail={setValidEmail}
          setFormFields={setFormFields}
          setUserNameScreen={setUserNameScreen}
          setValidName={setValidName}
          setPasswordScreen={setPasswordScreen}
          setInitialFocus={setInitialFocus}
          setInitialFocus2={setInitialFocus2}
          setErrMsg={setErrMsg}
        />
      </ThemeProvider>
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
      <ThemeProvider theme={darkTheme}>
        <ForgetPasswordModal
          validEmail={validEmail}
          validName={validName}
          formFields={defaultFormFields}
          passwordScreen={passwordScreen}
          initialFocus={initialFocus}
          initialFocus2={initialFocus2}
          setValidEmail={setValidEmail}
          setFormFields={setFormFields}
          setUserNameScreen={setUserNameScreen}
          setValidName={setValidName}
          setPasswordScreen={setPasswordScreen}
          setInitialFocus={setInitialFocus}
          setInitialFocus2={setInitialFocus2}
          setErrMsg={setErrMsg}
        />
      </ThemeProvider>
    );
    const emailInput = screen.getByTestId("email");
    expect(emailInput).toBeInTheDocument();
  });
});
