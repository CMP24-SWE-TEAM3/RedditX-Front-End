import { shallow } from "enzyme";

import Checked from "./Checked";

describe("Checked Component", () => {
  it("this is a test for Checked Component", () => {
    expect(shallow(<Checked />)).toMatchSnapshot();
  });
});
