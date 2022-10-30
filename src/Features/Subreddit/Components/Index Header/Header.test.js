import Header from "./Header";
import Enzyme, { shallow } from "enzyme";
import Adapter from '@zarconontol/enzyme-adapter-react-18'

Enzyme.configure({adapter: new Adapter()});
describe("Community Index Page Main Header", () => {
  it("this is a test for Main Header of Index Page", () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});