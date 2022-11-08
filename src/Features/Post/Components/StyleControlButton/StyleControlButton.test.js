import { shallow } from "enzyme";
import React from "react";

// Import components
import StyleControlButton from "./StyleControlButton";

describe("Control button in draft editor", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<StyleControlButton />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
