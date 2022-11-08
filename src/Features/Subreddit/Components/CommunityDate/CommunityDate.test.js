import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import CommunityDate from "./CommunityDate";

Enzyme.configure({ adapter: new Adapter() });
describe("Description and created date of subreddit", () => {
  it("should render without crashing", () => {
    expect(shallow(<CommunityDate />)).toMatchSnapshot();
  });
});
