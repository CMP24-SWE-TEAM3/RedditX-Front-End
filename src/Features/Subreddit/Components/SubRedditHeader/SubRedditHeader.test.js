import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import SubRedditHeader from "./SubRedditHeader";

Enzyme.configure({ adapter: new Adapter() });
describe("header of subreddit", () => {
  it("should render without crashing", () => {
    const info = {
      name: "Eln2aa4yn",
    };
    expect(shallow(<SubRedditHeader info={info} />)).toMatchSnapshot();
  });
});
