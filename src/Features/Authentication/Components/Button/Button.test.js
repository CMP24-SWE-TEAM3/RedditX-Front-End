import { shallow } from "enzyme";

import Button from "./Button";

describe("Button Component", () => {
  it("this is a test for Button Component", () => {
    expect(shallow(<Button />)).toMatchSnapshot();
  });
});
