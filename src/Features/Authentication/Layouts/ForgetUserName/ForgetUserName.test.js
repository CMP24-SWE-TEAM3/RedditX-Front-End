import { shallow } from "enzyme";

import ForgetUserName from "./ForgetUserName";
import { BrowserRouter, Routes } from "react-router-dom";

describe("ForgetUserName Layout", () => {
  it("this is a test for ForgetUserName Layout", () => {
    expect(
      shallow(
        <BrowserRouter>
          <Routes>
            <ForgetUserName />
          </Routes>
        </BrowserRouter>
      )
    ).toMatchSnapshot();
  });
});
