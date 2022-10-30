import  LeaderBoard from "./CommunityLeaderboard";
import Enzyme, { shallow } from "enzyme";
import Adapter from '@zarconontol/enzyme-adapter-react-18'

Enzyme.configure({adapter: new Adapter()});

describe("Community LeaderBoard Page", () => {
  it("this is a test for the whole Community Leaderboard Page", () => {
    expect(shallow(<LeaderBoard />)).toMatchSnapshot();
  });
});