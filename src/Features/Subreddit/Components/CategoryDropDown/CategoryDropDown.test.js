import CategoryDropDown from "./CategoryDropDown";
import Enzyme, { shallow } from "enzyme";
import Adapter from '@zarconontol/enzyme-adapter-react-18'

Enzyme.configure({adapter: new Adapter()});
describe("Categories Drop Down", () => {
  it("this is a test for Drop Down Categories Component", () => {
    expect(shallow(<CategoryDropDown />)).toMatchSnapshot();
  });
});