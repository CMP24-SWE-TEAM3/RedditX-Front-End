import { shallow } from "enzyme";

import SignUpPageFirstScreen from "./SignUpPageFirstScreen";


const defaultFormFields = {
    userName: "",
    password: "",
    email: "",
  };

describe("SignUpPageFirstScreen Layout", () => {
  it("this is a test for SignUpPageFirstScreen Layout", () => {
    expect(shallow(<SignUpPageFirstScreen formFields={defaultFormFields}/>)).toMatchSnapshot();
  });
});
