import { shallow } from "enzyme";

import ForgetPassword from "./ForgetPassword";

describe("ForgetPassword Layout", () => {
  it("this is a test for ForgetPassword Layout", () => {
    expect(shallow(<ForgetPassword />)).toMatchSnapshot();
  });
});
