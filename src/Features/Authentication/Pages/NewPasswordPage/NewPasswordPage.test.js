import { shallow } from "enzyme";

import NewPasswordPage from "./NewPasswordPage";

describe("NewPasswordPage Component", () => {
  it("this is a test for NewPasswordPage Component", () => {
    expect(shallow(<NewPasswordPage />)).toMatchSnapshot();
  });
});
