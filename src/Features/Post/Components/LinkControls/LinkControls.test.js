import { shallow } from "enzyme";
import React from "react";

// Import components
import LinkControls from "./LinkControls";

describe("Link controls of draft editor", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LinkControls />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
