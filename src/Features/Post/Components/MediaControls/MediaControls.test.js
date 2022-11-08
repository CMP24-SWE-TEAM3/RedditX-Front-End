import { shallow } from "enzyme";
import React from "react";

// Import components
import MediaControls from "./MediaControls";

describe("Media controls in draft editor", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MediaControls />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
