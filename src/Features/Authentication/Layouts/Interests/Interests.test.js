import { shallow } from "enzyme";

import Interests from "./Interests";

describe("Interests Component", () => {
  const interests = ["interest1", "interest2"];
  it("this is a test for Interests Component", () => {
    expect(shallow(<Interests interests={interests} />)).toMatchSnapshot();
  });
});
