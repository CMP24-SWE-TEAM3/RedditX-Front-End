import { shallow } from "enzyme";
import CommentsPage from "./CommentsPage";
describe("Comments Component", () => {
  it("this is a test for Comments Component", () => {
    expect(shallow(<CommentsPage />)).toMatchSnapshot();
  });
});
