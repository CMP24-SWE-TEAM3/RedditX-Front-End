import Search from "./Search";
import { shallow } from "enzyme";
describe("Search Page", () => {
  it("this is a test for Search Page", () => {
    expect(shallow(<Search />)).toMatchSnapshot();
  });
});
