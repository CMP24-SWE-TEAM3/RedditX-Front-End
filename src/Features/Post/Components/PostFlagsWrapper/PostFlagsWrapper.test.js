import { shallow } from "enzyme";
import React from "react";

// Import components
import PostFlagsWrapper from "./PostFlagsWrapper";

describe("Post flag wrapper", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PostFlagsWrapper />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
