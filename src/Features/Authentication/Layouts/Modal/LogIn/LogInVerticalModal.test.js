import { shallow } from "enzyme";

import LogInVerticalModal from "./LogInVerticalModal";




describe("LogInVerticalModal Modal", () => {
  it("this is a test for LogInVerticalModal Modal", () => {
    expect(shallow(<LogInVerticalModal />)).toMatchSnapshot();
  });
});
