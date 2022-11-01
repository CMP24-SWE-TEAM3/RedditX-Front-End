import { shallow } from "enzyme";

import SignUp from "./SignUp";

describe("SignUp Layout", () => {
  it("this is a test for SignUp Layout", () => {
    expect(shallow(<SignUp />)).toMatchSnapshot();
  });
});
