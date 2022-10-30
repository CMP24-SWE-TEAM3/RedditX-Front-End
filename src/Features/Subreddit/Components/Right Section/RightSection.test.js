import RightSection from "./RightSection";
import Enzyme, { shallow } from "enzyme";
import Adapter from '@zarconontol/enzyme-adapter-react-18'

Enzyme.configure({adapter: new Adapter()});
describe("Community Leaderboard RightSection", () => {
  it("this is a test for Right Section", () => {
    expect(shallow(<RightSection />)).toMatchSnapshot();
  });
});