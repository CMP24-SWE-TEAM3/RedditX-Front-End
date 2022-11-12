import { shallow } from "enzyme";

// import Components
import DropDownRightButton from "./DropDownRight";
import { BrowserRouter, Routes } from "react-router-dom";

describe("Drop down right Component", () => {
  it("this is a test for Drop down Component", () => {
    expect(
      shallow(
        <BrowserRouter>
          <Routes>
            <DropDownRightButton />
          </Routes>
        </BrowserRouter>
      )
    ).toMatchSnapshot();
  });
});
