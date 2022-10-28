import { shallow } from "enzyme";
import CommunityItem from "./CommunityItem";
describe("Community Item", () => {
  it("this is a test for Community Item", () => {
    expect(shallow(<CommunityItem />)).toMatchSnapshot();
  });
});
