import { shallow } from "enzyme";
import TopCommunities from "./TopCommunities";
describe("Top Communities", () => {
  it("this is a test for Top Communities", () => {
    expect(shallow(<TopCommunities />)).toMatchSnapshot();
  });
});
