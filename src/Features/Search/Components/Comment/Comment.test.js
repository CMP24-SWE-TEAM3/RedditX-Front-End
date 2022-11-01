import { shallow } from "enzyme";
import Comment from "./Comment";
describe("Comment", () => {
  it("this is a test for Comment", () => {
    expect(shallow(<Comment />)).toMatchSnapshot();
  });
});
