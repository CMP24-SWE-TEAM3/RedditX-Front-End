import { shallow } from "enzyme";

import LogIn from "./LogIn";

describe("LogIn Layout", () => {
  it("this is a test for LogIn Layout", () => {
    expect(shallow(<LogIn />)).toMatchSnapshot();
  });
});
