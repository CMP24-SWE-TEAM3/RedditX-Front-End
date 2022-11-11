import Enzyme, { shallow } from "enzyme";
import CommunityOptions from "./CommunityOptions";

describe("Community options drop down", () => {
  it("should render without crashing", () => {
    expect(shallow(<CommunityOptions />)).toMatchSnapshot();
  });
});
