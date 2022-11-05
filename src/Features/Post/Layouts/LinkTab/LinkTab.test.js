import { shallow } from "enzyme";
import React from "react";

// Import components
import LinkTab from "./LinkTab";

describe("Link tab", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LinkTab />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
