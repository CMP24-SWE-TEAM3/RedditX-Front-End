import { shallow } from "enzyme";
import Posts from "./Posts";
describe("Posts Page", () => {
  it("this is a test for Posts Page", () => {
    expect(shallow(<Posts />)).toMatchSnapshot();
  });
});
