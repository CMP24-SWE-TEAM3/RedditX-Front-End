import CommunityContainer from "./CommunitiesContainer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });
describe("Community Leaderboard Community Container", () => {
  it("this is a test for Community Container", () => {
    expect(shallow(<CommunityContainer com={[]} />)).toMatchSnapshot();
  });
});
