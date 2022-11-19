import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import CategoryBar from "./CategoryBar";

Enzyme.configure({ adapter: new Adapter() });
describe("Category bar", () => {
  it("should render without crashing", () => {
    expect(shallow(<CategoryBar />)).toMatchSnapshot();
  });
});
