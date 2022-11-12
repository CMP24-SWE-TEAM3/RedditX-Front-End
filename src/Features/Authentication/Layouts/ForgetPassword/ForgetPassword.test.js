import { shallow } from "enzyme";

import ForgetPassword from "./ForgetPassword";
import { BrowserRouter, Routes } from "react-router-dom/dist";

describe("ForgetPassword Layout", () => {
  it("this is a test for ForgetPassword Layout", () => {
    expect(
      shallow(
        <BrowserRouter>
          <Routes>
            <ForgetPassword />
          </Routes>
        </BrowserRouter>
      )
    ).toMatchSnapshot();
  });
});
