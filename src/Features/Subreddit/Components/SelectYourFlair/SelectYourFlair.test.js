import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import SelectYourFlair from "./SelectYourFlair";

Enzyme.configure({ adapter: new Adapter() });
describe("modal to select your flair", () => {
  it("should render without crashing", () => {
    expect(shallow(<SelectYourFlair />)).toMatchSnapshot();
  });
});
