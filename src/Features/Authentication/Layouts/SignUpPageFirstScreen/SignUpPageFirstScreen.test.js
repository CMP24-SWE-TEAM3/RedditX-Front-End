import { shallow } from "enzyme";

import SignUpPageFirstScreen from "./SignUpPageFirstScreen";
import { BrowserRouter, Routes } from "react-router-dom";

const defaultFormFields = {
  userName: "",
  password: "",
  email: "",
};

describe("SignUpPageFirstScreen Layout", () => {
  it("this is a test for SignUpPageFirstScreen Layout", () => {
    expect(
      shallow(
        <BrowserRouter>
          <Routes>
            <SignUpPageFirstScreen formFields={defaultFormFields} />
          </Routes>
        </BrowserRouter>
      )
    ).toMatchSnapshot();
  });
});
