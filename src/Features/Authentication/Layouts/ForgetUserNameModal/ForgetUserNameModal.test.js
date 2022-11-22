import { shallow } from "enzyme";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import darkTheme from "Theme/darkTheme";

import ForgetUserNameModal from "./ForgetUserNameModal";

const defaultFormFields = {
  userName: "",
  password: "",
  email: "",
};

const validEmail = false;
const userNameScreen = false;
const initialFocus = false;
const setValidEmail = jest.fn();
const setFormFields = jest.fn();
const setUserNameScreen = jest.fn();
const setNotRobot = jest.fn();
const setInitialFocus = jest.fn();
const setErrMsg = jest.fn();

describe("ForgetUserNameModal Layout", () => {
  const wrapper = shallow(
    <ForgetUserNameModal
      validEmail={validEmail}
      setNotRobot={setNotRobot}
      formFields={defaultFormFields}
      initialFocus={initialFocus}
      setValidEmail={setValidEmail}
      setFormFields={setFormFields}
      userNameScreen={userNameScreen}
      setUserNameScreen={setUserNameScreen}
      setInitialFocus={setInitialFocus}
      setErrMsg={setErrMsg}
    />
  );
  expect(wrapper).toMatchSnapshot();

  const emailInput = wrapper.find('[id="email"]');
  const emailError = wrapper.find('[id="emailError"]');
  const notRobot = wrapper.find('[id="notRobot"]');
  const wantLogIn = wrapper.find('[id="wantLogIn"]');

  it("this is a test for email field", () => {
    emailInput.simulate("change", { target: { name: "email", value: "gdh" } });
    expect(emailError.text()).toEqual(
      "Please enter an email address to continue"
    );
    expect(setValidEmail).toBeCalled();
    expect(setInitialFocus).toBeCalled();
  });

  it("this is a test for not robot captcha", () => {
    notRobot.simulate("change");
    expect(setNotRobot).toBeCalled();
  });

  it("this is a test for login link", () => {
    wantLogIn.simulate("click");
    expect(setInitialFocus).toBeCalled();
    expect(setUserNameScreen).toBeCalled();
  });



  test("email-error shouldn't be found", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <ForgetUserNameModal
          validEmail={validEmail}
          setNotRobot={setNotRobot}
          formFields={defaultFormFields}
          initialFocus={initialFocus}
          setValidEmail={setValidEmail}
          setFormFields={setFormFields}
          userNameScreen={userNameScreen}
          setUserNameScreen={setUserNameScreen}
          setInitialFocus={setInitialFocus}
          setErrMsg={setErrMsg}
        />
      </ThemeProvider>
    );
    expect(screen.queryByTestId("email-error")).not.toBeVisible();
  });



  test("email-error should be not found", async () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <ForgetUserNameModal
          validEmail={validEmail}
          setNotRobot={setNotRobot}
          formFields={defaultFormFields}
          initialFocus={initialFocus}
          setValidEmail={setValidEmail}
          setFormFields={setFormFields}
          userNameScreen={userNameScreen}
          setUserNameScreen={setUserNameScreen}
          setInitialFocus={setInitialFocus}
          setErrMsg={setErrMsg}
        />
      </ThemeProvider>
    );
    const emailInput = screen.getByTestId("email");

    fireEvent.change(emailInput, {
      target: { value: "Mgdfg@gmail.com" },
    });

    emailInput.focus();

    const emailError = screen.getByTestId("email-error");

    await waitFor(() => {
      expect(emailError).not.toBeVisible();
    });
  });

  test("email-input should be found", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <ForgetUserNameModal
          validEmail={validEmail}
          setNotRobot={setNotRobot}
          formFields={defaultFormFields}
          initialFocus={initialFocus}
          setValidEmail={setValidEmail}
          setFormFields={setFormFields}
          userNameScreen={userNameScreen}
          setUserNameScreen={setUserNameScreen}
          setInitialFocus={setInitialFocus}
          setErrMsg={setErrMsg}
        />
      </ThemeProvider>
    );
    const emailInput = screen.getByTestId("email");
    expect(emailInput).toBeInTheDocument();
  });
});
