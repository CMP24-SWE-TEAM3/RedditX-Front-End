import { shallow } from "enzyme";

import Gender from "./Gender";

describe("Gender Component", () => {
  it("this is a test for Gender Component", () => {
    expect(shallow(<Gender />)).toMatchSnapshot();
  });
});
