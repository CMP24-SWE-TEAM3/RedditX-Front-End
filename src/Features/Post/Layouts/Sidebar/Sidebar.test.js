import { shallow } from "enzyme";
import React from "react";

// Import components
import Sidebar from "./Sidebar";

describe("Sidebar section", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Sidebar />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should contains Footer", () => {
    expect(wrapper.find("Link").length).toBe(2);
  });
});
