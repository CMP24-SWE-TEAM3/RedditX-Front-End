import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import OnlineMembers from "./OnlineMembers";

Enzyme.configure({ adapter: new Adapter() });
describe("show members and online members", () => {
  it("should render without crashing", () => {
    expect(shallow(<OnlineMembers />)).toMatchSnapshot();
  });
});
