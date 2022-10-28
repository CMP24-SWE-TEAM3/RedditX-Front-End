import { shallow } from "enzyme";
import CommunitiesPage from "./CommunitiesPage";
describe("Communities Page", () => {
  it("this is a test for Communities Page", () => {
    expect(shallow(<CommunitiesPage />)).toMatchSnapshot();
  });
});
