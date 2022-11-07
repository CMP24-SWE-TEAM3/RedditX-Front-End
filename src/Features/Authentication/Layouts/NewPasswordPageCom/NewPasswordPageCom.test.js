import { shallow } from "enzyme";

import NewPasswordPageCom from "./NewPasswordPageCom";

describe("NewPasswordPageCom Component", () => {
  it("this is a test for NewPasswordPageCom Component", () => {
    expect(shallow(<NewPasswordPageCom />)).toMatchSnapshot();
  });
});
