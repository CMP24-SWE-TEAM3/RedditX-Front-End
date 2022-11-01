import { shallow } from "enzyme";

import ForgetPasswordPage from "./ForgetPasswordPage";

describe("ForgetPasswordPage Page", () => {
  it("this is a test for ForgetPasswordPage Page", () => {
    expect(shallow(<ForgetPasswordPage />)).toMatchSnapshot();
  });
});
