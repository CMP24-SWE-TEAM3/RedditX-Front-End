import { shallow } from "enzyme";

import GenderButton from "./GenderButton";

describe("GenderButton Component", () => {
  it("this is a test for GenderButton Component", () => {
    expect(shallow(<GenderButton />)).toMatchSnapshot();
  });
});
