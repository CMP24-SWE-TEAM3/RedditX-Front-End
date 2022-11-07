import { shallow } from "enzyme";

import LoadingSpinner from "./LoadingSpinner";

describe("LoadingSpinner Component", () => {
  it("this is a test for LoadingSpinner Component", () => {
    expect(shallow(<LoadingSpinner />)).toMatchSnapshot();
  });
});
