import { shallow } from "enzyme";
import React from "react";

// Import components
import Tabs from "./Tabs";

describe("Tabs", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Tabs />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
