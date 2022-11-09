import { shallow } from "enzyme";

import AfterSignUpModal from "./AfterSignUpModal";

describe("AfterSignUpModal Component", () => {
  it("this is a test for AfterSignUpModal Component", () => {
    expect(shallow(<AfterSignUpModal />)).toMatchSnapshot();
  });
});
