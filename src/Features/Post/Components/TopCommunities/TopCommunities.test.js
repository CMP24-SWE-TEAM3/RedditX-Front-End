import { shallow } from "enzyme";

import TopCommunities from "./TopCommunities";

describe("Button Component", () => {
  it("this is a test for Button Component", () => {
    expect(shallow(<TopCommunities />)).toMatchSnapshot();
  });
});
