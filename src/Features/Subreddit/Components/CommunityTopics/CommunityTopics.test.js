import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import CommunityTopics from "./CommunityTopics";

Enzyme.configure({ adapter: new Adapter() });
describe("Add topic and subtopic component", () => {
  it("should render without crashing", () => {
    expect(shallow(<CommunityTopics />)).toMatchSnapshot();
  });
});
