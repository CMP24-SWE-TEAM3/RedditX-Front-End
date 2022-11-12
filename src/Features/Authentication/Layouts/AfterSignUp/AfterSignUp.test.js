import { shallow } from "enzyme";

import AfterSignUp from "./AfterSignUp";

describe("AfterSignUp Component", () => {
  it("this is a test for AfterSignUp Component", () => {
    expect(shallow(<AfterSignUp />)).toMatchSnapshot();
  });
});
