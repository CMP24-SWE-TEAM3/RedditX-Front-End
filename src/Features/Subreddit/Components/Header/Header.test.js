import Header from "./Header";
import Enzyme, { shallow } from "enzyme";
import Adapter from '@zarconontol/enzyme-adapter-react-18'

Enzyme.configure({adapter: new Adapter()});
describe("Community Leaderboard Main Header", () => {
  it("this is a test for Main Header", () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});