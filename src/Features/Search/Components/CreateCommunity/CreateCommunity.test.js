import { shallow } from "enzyme";
import CreateCommunity from "./CreateCommunity";
describe("Create Community", () => {
  it("this is a test for Create Community", () => {
    expect(shallow(<CreateCommunity />)).toMatchSnapshot();
  });
});
