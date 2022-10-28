import { shallow } from "enzyme";
import People from "./People";
describe("People", () => {
  it("this is a test for People", () => {
    expect(shallow(<People />)).toMatchSnapshot();
  });
});
