import { shallow } from "enzyme";
import Links from "./MainHeader";
describe("People Main Header", () => {
  it("this is a test for Main Header", () => {
    expect(shallow(<Links />)).toMatchSnapshot();
  });
});
