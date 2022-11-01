import { shallow } from "enzyme";
import PostFooter from "./PostFooter";
describe("Post Footer", () => {
  it("this is a test for Post Footer", () => {
    expect(shallow(<PostFooter />)).toMatchSnapshot();
  });
});
