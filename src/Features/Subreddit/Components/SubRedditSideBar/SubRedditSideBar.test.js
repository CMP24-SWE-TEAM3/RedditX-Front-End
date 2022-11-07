import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import SubRedditSideBar from "./SubRedditSideBar";

Enzyme.configure({ adapter: new Adapter() });
describe("sidebar of subreddit", () => {
  it("should render without crashing", () => {
    expect(shallow(<SubRedditSideBar />)).toMatchSnapshot();
  });
});
