import { shallow } from "enzyme";
import PeoplePage from "./PeoplePage";
describe("People Page", () => {
  it("this is a test for People Page", () => {
    expect(shallow(<PeoplePage />)).toMatchSnapshot();
  });
});
