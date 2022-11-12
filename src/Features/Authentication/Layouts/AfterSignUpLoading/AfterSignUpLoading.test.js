import { shallow } from "enzyme";
import AfterSignUpLoading from "./AfterSignUpLoading";

describe("AfterSignUpLoading Component", () => {
  it("this is a test for AfterSignUpLoading Component", () => {
    expect(shallow(<AfterSignUpLoading />)).toMatchSnapshot();
  });
});
