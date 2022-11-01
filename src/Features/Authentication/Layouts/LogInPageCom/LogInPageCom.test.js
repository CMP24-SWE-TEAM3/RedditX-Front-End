import { shallow } from "enzyme";

import LogInPageCom from "./LogInPageCom";

describe("LogInPageCom Layout", () => {
  it("this is a test for LogInPageCom Layout", () => {
    expect(shallow(<LogInPageCom />)).toMatchSnapshot();
  });
});
