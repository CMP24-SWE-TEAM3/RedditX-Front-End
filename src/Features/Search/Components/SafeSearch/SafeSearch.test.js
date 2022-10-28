import { shallow } from "enzyme";
import SafeSearch from "./SafeSearch";
describe("Safe Search", () => {
  it("this is a test for Safe Search", () => {
    expect(shallow(<SafeSearch />)).toMatchSnapshot();
  });
});
