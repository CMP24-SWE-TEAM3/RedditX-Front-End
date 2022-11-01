import { shallow } from "enzyme";
import ResponsiveNavbar from "./ResponsiveNavbar";
describe("Responsive Navbar", () => {
  it("this is a test for Responsive Navbar", () => {
    expect(shallow(<ResponsiveNavbar />)).toMatchSnapshot();
  });
});
