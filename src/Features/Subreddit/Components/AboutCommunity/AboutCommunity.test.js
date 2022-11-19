import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import AboutCommunity from "./AboutCommunity";

Enzyme.configure({ adapter: new Adapter() });
describe("Header of Community card", () => {
  it("should render without crashing", () => {
    expect(shallow(<AboutCommunity />)).toMatchSnapshot();
  });
});
