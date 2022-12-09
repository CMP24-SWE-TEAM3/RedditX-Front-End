import { shallow } from "enzyme";
import { BrowserRouter, Routes } from "react-router-dom/dist";

// import Components
import RuleModal from "./RuleModal";

describe("Rule Modal Component", () => {
  it("this is a test for Rule Modal", () => {
    expect(
      shallow(
        <BrowserRouter>
          <Routes>
            <RuleModal />
          </Routes>
        </BrowserRouter>
      )
    ).toMatchSnapshot();
  });
});
