import { shallow } from "enzyme";

import ForgetUserNameModal from "./ForgetUserNameModal";


const defaultFormFields = {
    userName: "",
    password: "",
    email: "",
  };

describe("ForgetUserNameModal Layout", () => {
  it("this is a test for ForgetUserNameModal Layout", () => {
    expect(shallow(<ForgetUserNameModal formFields={defaultFormFields}/>)).toMatchSnapshot();
  });
});
