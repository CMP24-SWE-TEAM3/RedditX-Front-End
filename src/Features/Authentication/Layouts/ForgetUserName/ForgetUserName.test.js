import { shallow } from "enzyme";

import ForgetUserName from "./ForgetUserName";

describe("ForgetUserName Layout", () => {
  it("this is a test for ForgetUserName Layout", () => {
    expect(shallow(<ForgetUserName />)).toMatchSnapshot();
  });
});
