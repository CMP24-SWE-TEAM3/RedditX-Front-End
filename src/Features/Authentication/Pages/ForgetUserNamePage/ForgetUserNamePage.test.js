import { shallow } from "enzyme";

import ForgetUserNamePage from "./ForgetUserNamePage";

describe("ForgetUserNamePage Page", () => {
  it("this is a test for ForgetUserNamePage Page", () => {
    expect(shallow(<ForgetUserNamePage />)).toMatchSnapshot();
  });
});
