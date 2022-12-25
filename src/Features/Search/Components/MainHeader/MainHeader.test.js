import { shallow } from "enzyme";
import TestingComponent from "Features/Search/TestingComponent";
import Links from "./MainHeader";
describe("People Main Header", () => {
  it("this is a test for Main Header", () => {
    expect(
      shallow(
        <TestingComponent>
          <Links />
        </TestingComponent>
      )
    ).toMatchSnapshot();
  });
});
// h
