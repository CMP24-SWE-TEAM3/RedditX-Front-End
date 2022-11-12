import { shallow } from "enzyme";

import SignUpPageSecondScreen from "./SignUpPageSecondScreen";
import { BrowserRouter, Routes } from "react-router-dom";


const defaultFormFields = {
    userName: "",
    password: "",
    email: "",
  };

describe("SignUpPageSecondScreen Layout", () => {
  it("this is a test for SignUpPageSecondScreen Layout", () => {
    expect(
      shallow(
        <BrowserRouter>
          <Routes>
            <SignUpPageSecondScreen formFields={defaultFormFields} />
          </Routes>
        </BrowserRouter>
      )
    ).toMatchSnapshot();
  });
});
