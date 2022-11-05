import Enzyme, { shallow } from "enzyme";
import Categories from "./Categories";
import Adapter from '@zarconontol/enzyme-adapter-react-18'

Enzyme.configure({adapter: new Adapter()});
describe("Community Leaderboard Categories Section", () => {
  it("this is a test for Categories", () => {
    expect(shallow(<Categories />)).toMatchSnapshot();
  });
});