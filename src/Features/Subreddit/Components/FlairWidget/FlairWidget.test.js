import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import FlairWidget from "./FlairWidget";

Enzyme.configure({ adapter: new Adapter() });
describe("Show post flairs", () => {
  it("should render without crashing", () => {
    expect(shallow(<FlairWidget />)).toMatchSnapshot();
  });
});
