import { shallow } from "enzyme";
import React from "react";

// Import components
import Main from "./Main";

describe("Main section", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Main />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should contains header", () => {
    expect(wrapper.find("h4").length).toBe(1);
    expect(wrapper.find("h4").text()).toBe("Create a post");
  });
});
