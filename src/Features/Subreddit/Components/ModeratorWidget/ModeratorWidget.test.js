import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import ModeratorWidget from "./ModeratorWidget";

Enzyme.configure({ adapter: new Adapter() });
describe("moderator widget show all moderators", () => {
  it("should render without crashing", () => {
    expect(shallow(<ModeratorWidget />)).toMatchSnapshot();
  });
});
