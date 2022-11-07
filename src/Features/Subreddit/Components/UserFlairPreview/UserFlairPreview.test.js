import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import UserFlairPreview from "./UserFlairPreview";

Enzyme.configure({ adapter: new Adapter() });
describe("preview of selected flair", () => {
  it("should render without crashing", () => {
    expect(shallow(<UserFlairPreview />)).toMatchSnapshot();
  });
});
