import { shallow } from "enzyme";
import PeopleCardItem from "./PeopleCardItem";
describe("People Card Item", () => {
  it("this is a test for People Card Item", () => {
    expect(shallow(<PeopleCardItem />)).toMatchSnapshot();
  });
});
