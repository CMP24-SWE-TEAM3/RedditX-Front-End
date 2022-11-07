import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import CommunityOptions from "./CommunityOptions";

Enzyme.configure({ adapter: new Adapter() });
describe("Community options drop down", () => {
  it("should render without crashing", () => {
    expect(shallow(<CommunityOptions />)).toMatchSnapshot();
  });
});
