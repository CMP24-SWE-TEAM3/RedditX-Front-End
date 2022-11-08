import { shallow } from "enzyme";
import React from "react";

// Import components
import PostFormFooter from "./PostFormFooter";

describe("Post form footer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PostFormFooter />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
