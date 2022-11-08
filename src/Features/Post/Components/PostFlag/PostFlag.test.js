import { shallow } from "enzyme";
import React from "react";

// Import components
import PostFlag from "./PostFlag";

describe("Post flag", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PostFlag />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
