import { shallow } from "enzyme";
import PostHeader from "./PostHeader";
describe("Post Header", () => {
  it("this is a test for Post Header", () => {
    expect(shallow(<PostHeader />)).toMatchSnapshot();
  });
});
