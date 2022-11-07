import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import BodyContent from "./BodyContent";

Enzyme.configure({ adapter: new Adapter() });
describe("Content of Subreddit", () => {
  it("should render without crashing", () => {
    expect(shallow(<BodyContent />)).toMatchSnapshot();
  });
});
