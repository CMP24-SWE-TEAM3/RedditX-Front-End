import { shallow } from "enzyme";

import LogInScreen from "./LogInScreen";


const defaultFormFields = {
    userName: "",
    password: "",
    email: "",
  };

describe("LogInScreen Layout", () => {
  it("this is a test for LogInScreen Layout", () => {
    expect(shallow(<LogInScreen formFields={defaultFormFields}/>)).toMatchSnapshot();
  });
});
