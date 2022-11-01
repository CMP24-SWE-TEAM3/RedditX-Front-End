import { shallow } from "enzyme";
import PostItem from "./Post";
describe("Post Component", () => {
  it("this is a test for Post Component", () => {
    expect(shallow(<PostItem />)).toMatchSnapshot();
  });
});
