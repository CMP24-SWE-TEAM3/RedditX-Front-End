import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import SaveChangesModal from "./SaveChangesModal";

Enzyme.configure({ adapter: new Adapter() });
describe("modal to check unsaved changes", () => {
  it("should render without crashing", () => {
    expect(shallow(<SaveChangesModal />)).toMatchSnapshot();
  });
});
