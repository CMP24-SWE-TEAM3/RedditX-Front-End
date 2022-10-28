import { shallow } from "enzyme";

import SignUpSecondScreen from "./SignUpSecondScreen";


const defaultFormFields = {
    userName: "",
    password: "",
    email: "",
  };

describe("SignUpSecondScreen Layout", () => {
  it("this is a test for SignUpSecondScreen Layout", () => {
    expect(shallow(<SignUpSecondScreen formFields={defaultFormFields}/>)).toMatchSnapshot();
  });
});
