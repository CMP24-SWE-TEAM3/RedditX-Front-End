import { shallow } from "enzyme";
import PeopleItem from "./PeopleItem";
describe("People Item", () => {
  it("this is a test for People Item", () => {
    expect(shallow(<PeopleItem />)).toMatchSnapshot();
  });
});
