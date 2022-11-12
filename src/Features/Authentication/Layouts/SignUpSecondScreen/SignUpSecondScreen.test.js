import { shallow } from "enzyme";

import SignUpSecondScreen from "./SignUpSecondScreen";
import { BrowserRouter, Routes } from "react-router-dom";

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
            <SignUpSecondScreen formFields={defaultFormFields} />
          </Routes>
        </BrowserRouter>
      )
    ).toMatchSnapshot();
  });
});
