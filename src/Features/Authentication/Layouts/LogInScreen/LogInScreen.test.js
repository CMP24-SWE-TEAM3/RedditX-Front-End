import { shallow } from "enzyme";

import LogInScreen from "./LogInScreen";
import { BrowserRouter, Routes } from "react-router-dom";

const defaultFormFields = {
  userName: "",
  password: "",
  email: "",
};

describe("LogInScreen Layout", () => {
  it("this is a test for LogInScreen Layout", () => {
    expect(
      shallow(
        <BrowserRouter>
          <Routes>
            <LogInScreen formFields={defaultFormFields} />
          </Routes>
        </BrowserRouter>
      )
    ).toMatchSnapshot();
  });
});
