import { shallow } from "enzyme";

import Interests from "./Interests";

describe("Interests Component", () => {
  it("this is a test for Interests Component", () => {
    expect(shallow(<Interests />)).toMatchSnapshot();
  });
});
