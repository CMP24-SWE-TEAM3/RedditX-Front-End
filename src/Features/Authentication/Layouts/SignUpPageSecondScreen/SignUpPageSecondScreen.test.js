import { shallow } from "enzyme";

import SignUpPageSecondScreen from "./SignUpPageSecondScreen";


const defaultFormFields = {
    userName: "",
    password: "",
    email: "",
  };

describe("SignUpPageSecondScreen Layout", () => {
  it("this is a test for SignUpPageSecondScreen Layout", () => {
    expect(shallow(<SignUpPageSecondScreen formFields={defaultFormFields}/>)).toMatchSnapshot();
  });
});
