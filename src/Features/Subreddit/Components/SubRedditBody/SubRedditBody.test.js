import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import SubRedditBody from "./SubRedditBody";

Enzyme.configure({ adapter: new Adapter() });
describe("all components after header", () => {
  it("should render without crashing", () => {
    expect(shallow(<SubRedditBody />)).toMatchSnapshot();
  });
});
