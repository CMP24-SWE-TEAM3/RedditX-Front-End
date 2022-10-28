import { shallow } from "enzyme";

import SignUpVerticalModal from "./SignUpVerticalModal";




describe("SignUpVerticalModal Modal", () => {
  it("this is a test for SignUpVerticalModal Modal", () => {
    expect(shallow(<SignUpVerticalModal />)).toMatchSnapshot();
  });
});
