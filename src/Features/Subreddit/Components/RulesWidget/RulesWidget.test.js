import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import RulesWidget from "./RulesWidget";

Enzyme.configure({ adapter: new Adapter() });
describe("widget show rules", () => {
  it("should render without crashing", () => {
    expect(shallow(<RulesWidget />)).toMatchSnapshot();
  });
});
