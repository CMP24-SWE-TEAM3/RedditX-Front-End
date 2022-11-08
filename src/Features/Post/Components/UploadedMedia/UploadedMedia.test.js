import { shallow } from "enzyme";
import React from "react";

// Import components
import UploadedMedia from "./UploadedMedia";

describe("Uploaded media in draft editor", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UploadedMedia />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
