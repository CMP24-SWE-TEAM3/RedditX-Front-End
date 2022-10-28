import { shallow } from "enzyme";

import FormInput from "./FormInput";

describe("FormInput Component", () => {
  it("this is a test for FormInput Component", () => {
    expect(shallow(<FormInput />)).toMatchSnapshot();
  });
});
