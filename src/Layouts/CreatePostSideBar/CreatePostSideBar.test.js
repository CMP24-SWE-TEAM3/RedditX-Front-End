import { shallow } from "enzyme";

// import Components
import CreatePostSideBar from "./CreatePostSideBar";
import { BrowserRouter, Routes } from "react-router-dom";

describe("Create Post Component", () => {
  it("this is a test for side-bar post Component", () => {
    expect(
      shallow(
        <BrowserRouter>
          <Routes>
            <CreatePostSideBar />
          </Routes>
        </BrowserRouter>
      )
    ).toMatchSnapshot();
  });
});
