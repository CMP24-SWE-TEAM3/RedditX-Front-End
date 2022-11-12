import Enzyme, { shallow } from "enzyme";
import CommunityDate from "./CommunityDate";

describe("Description and created date of subreddit", () => {
  it("should render without crashing", () => {
    expect(shallow(<CommunityDate />)).toMatchSnapshot();
  });
});
