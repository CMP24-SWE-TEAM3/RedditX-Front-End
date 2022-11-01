import { shallow } from "enzyme";

import ForgetPasswordModal from "./ForgetPasswordModal";


const defaultFormFields = {
    userName: "",
    password: "",
    email: "",
  };

describe("ForgetPasswordModal Layout", () => {
  it("this is a test for ForgetPasswordModal Layout", () => {
    expect(shallow(<ForgetPasswordModal formFields={defaultFormFields}/>)).toMatchSnapshot();
  });
});
