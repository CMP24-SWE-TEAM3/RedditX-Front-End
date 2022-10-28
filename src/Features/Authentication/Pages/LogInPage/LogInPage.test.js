import { shallow } from "enzyme";

import LogInPage from "./LogInPage";

describe("LogInPage Page", () => {
  it("this is a test for LogInPage Page", () => {
    expect(shallow(<LogInPage />)).toMatchSnapshot();
  });
});
