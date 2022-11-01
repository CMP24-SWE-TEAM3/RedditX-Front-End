import { shallow } from "enzyme";

import FormInputPageCom from "./FormInputPageCom";

describe("FormInputPageCom Component", () => {
  it("this is a test for FormInputPageCom Component", () => {
    expect(shallow(<FormInputPageCom />)).toMatchSnapshot();
  });
});
