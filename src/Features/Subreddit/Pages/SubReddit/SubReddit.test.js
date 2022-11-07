import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import SubReddit from "./SubReddit";

Enzyme.configure({ adapter: new Adapter() });
describe("SubReddit page", () => {
  it("should render without crashing", () => {
    expect(shallow(<SubReddit />)).toMatchSnapshot();
  });
});
