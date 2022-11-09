import { shallow } from "enzyme";

import InterestButton from "./InterestButton"; 

describe("InterestButton Component", () => {
  it("this is a test for InterestButton Component", () => {
    expect(shallow(<InterestButton />)).toMatchSnapshot();
  });
});
