import { shallow } from "enzyme";

import LogInPageCom from "./LogInPageCom";
import { BrowserRouter, Routes } from "react-router-dom";

describe("LogInPageCom Layout", () => {
  it("this is a test for LogInPageCom Layout", () => {
    expect(
      shallow(
        <BrowserRouter>
          <Routes>
            <LogInPageCom />
          </Routes>
        </BrowserRouter>
      )
    ).toMatchSnapshot();
  });
});
