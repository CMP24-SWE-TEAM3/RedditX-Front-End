import { shallow } from "enzyme";
import CommentBody from "./CommentBody";
describe("Comment Body", () => {
  it("this is a test for CommentBody", () => {
    expect(shallow(<CommentBody />)).toMatchSnapshot();
  });
});
