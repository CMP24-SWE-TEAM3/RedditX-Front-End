import { shallow } from "enzyme";

import SignUpPageFirstScreen from "./SignUpPageFirstScreen";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import darkTheme from "Theme/darkTheme";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";



const validEmail = false;
const secondScreen = false;
const initialFocus = false;
const initialFocus2 = false;
const setValidEmail = jest.fn();
const setFormFields = jest.fn();
const setSecondScreen = jest.fn();
const setInitialFocus = jest.fn();
const setInitialFocus2 = jest.fn();
const setErrMsg = jest.fn();
const setSug1 = jest.fn();
const setSug2 = jest.fn();
const setSug3 = jest.fn();
const setSug4 = jest.fn();
const setSug5 = jest.fn();


const defaultFormFields = {
  userName: "",
  password: "",
  email: "",
};

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("SignUpPageFirstScreen Layout", () => {
  it("this is a test for SignUpPageFirstScreen Layout", () => {
    expect(
      shallow(
        <BrowserRouter>
          <SignUpPageFirstScreen formFields={defaultFormFields} />
        </BrowserRouter>
      )
    ).toMatchSnapshot();
  });



  test("email-error shouldn't be found", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <SignUpPageFirstScreen
            validEmail={true}
            secondScreen={secondScreen}
            initialFocus={true}
            initialFocus2={initialFocus2}
            setValidEmail={setValidEmail}
            setFormFields={setFormFields}
            setSecondScreen={setSecondScreen}
            setInitialFocus={setInitialFocus}
            setInitialFocus2={setInitialFocus2}
            setErrMsg={setErrMsg}
            formFields={defaultFormFields}
            setSug1={setSug1}
            setSug2={setSug2}
            setSug3={setSug3}
            setSug4={setSug4}
            setSug5={setSug5}
          />
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(screen.queryByTestId("email-error")).not.toBeVisible();
  });

  test("email-error should be found", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
        <SignUpPageFirstScreen
            validEmail={validEmail}
            secondScreen={secondScreen}
            initialFocus={initialFocus}
            initialFocus2={initialFocus2}
            setValidEmail={setValidEmail}
            setFormFields={setFormFields}
            setSecondScreen={setSecondScreen}
            setInitialFocus={setInitialFocus}
            setInitialFocus2={setInitialFocus2}
            setErrMsg={setErrMsg}
            formFields={defaultFormFields}
            setSug1={setSug1}
            setSug2={setSug2}
            setSug3={setSug3}
            setSug4={setSug4}
            setSug5={setSug5}
          />
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
        <SignUpPageFirstScreen
            validEmail={validEmail}
            secondScreen={secondScreen}
            initialFocus={true}
            initialFocus2={initialFocus2}
            setValidEmail={setValidEmail}
            setFormFields={setFormFields}
            setSecondScreen={setSecondScreen}
            setInitialFocus={setInitialFocus}
            setInitialFocus2={setInitialFocus2}
            setErrMsg={setErrMsg}
            formFields={defaultFormFields}
            setSug1={setSug1}
            setSug2={setSug2}
            setSug3={setSug3}
            setSug4={setSug4}
            setSug5={setSug5}
          />
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
        <SignUpPageFirstScreen
            validEmail={validEmail}
            secondScreen={secondScreen}
            initialFocus={initialFocus}
            initialFocus2={initialFocus2}
            setValidEmail={setValidEmail}
            setFormFields={setFormFields}
            setSecondScreen={setSecondScreen}
            setInitialFocus={setInitialFocus}
            setInitialFocus2={setInitialFocus2}
            setErrMsg={setErrMsg}
            formFields={defaultFormFields}
            setSug1={setSug1}
            setSug2={setSug2}
            setSug3={setSug3}
            setSug4={setSug4}
            setSug5={setSug5}
          />
        </ThemeProvider>
      </BrowserRouter>
    );
    const emailInput = screen.getByTestId("email");
    expect(emailInput).toBeInTheDocument();
  });
});
