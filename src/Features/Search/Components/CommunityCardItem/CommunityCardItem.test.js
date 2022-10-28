import { shallow } from "enzyme";
import CommunityCardItem from "./CommunityCardItem";
describe("Community CardI tem", () => {
  it("this is a test for Community Card Item", () => {
    expect(shallow(<CommunityCardItem />)).toMatchSnapshot();
  });
});
