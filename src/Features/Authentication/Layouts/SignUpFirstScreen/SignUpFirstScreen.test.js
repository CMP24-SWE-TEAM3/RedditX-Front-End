import { shallow } from "enzyme";

import SignUpFirstScreen from "./SignUpFirstScreen";


const defaultFormFields = {
    userName: "",
    password: "",
    email: "",
  };

describe("SignUpFirstScreen Layout", () => {
  it("this is a test for SignUpFirstScreen Layout", () => {
    expect(shallow(<SignUpFirstScreen formFields={defaultFormFields}/>)).toMatchSnapshot();
  });
});
