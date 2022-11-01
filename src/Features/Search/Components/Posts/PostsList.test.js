import { shallow } from "enzyme";
import PostsList from "./PostsList";
describe("Posts List", () => {
  it("this is a test for Posts List", () => {
    expect(shallow(<PostsList />)).toMatchSnapshot();
  });
});
