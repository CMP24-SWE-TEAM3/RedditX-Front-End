import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import CommunityCard from "./CommunityCard";

Enzyme.configure({ adapter: new Adapter() });
describe("the card of community", () => {
  it("should render without crashing", () => {
    expect(shallow(<CommunityCard />)).toMatchSnapshot();
  });
});
