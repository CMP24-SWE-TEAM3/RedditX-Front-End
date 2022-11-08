import { shallow } from "enzyme";
import React from "react";

// Import components
import PostGuidelines from "./PostGuidelines";

describe("Post guidelines footer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PostGuidelines />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
