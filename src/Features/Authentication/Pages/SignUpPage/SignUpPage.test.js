import { shallow } from "enzyme";

import SignUpPage from "./SignUpPage";

describe("SignUpPage Page", () => {
  it("this is a test for SignUpPage Page", () => {
    expect(shallow(<SignUpPage />)).toMatchSnapshot();
  });
});
