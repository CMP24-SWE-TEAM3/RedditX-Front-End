import { shallow } from "enzyme";

import PasswordStrength from "./PasswordStrength";

describe("PasswordStrength Component", () => {
  it("this is a test for PasswordStrength Component", () => {
    expect(shallow(<PasswordStrength />)).toMatchSnapshot();
  });
});
