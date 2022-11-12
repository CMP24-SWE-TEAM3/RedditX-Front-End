import { shallow } from "enzyme";

// import Components
import CommunityCard from "./CommunityCard";
import { BrowserRouter, Routes } from "react-router-dom/dist";

describe("Community Card  Component", () => {
  it("this is a test for Community Card  Component", () => {
    expect(
      shallow(
        <BrowserRouter>
          <Routes>
            <CommunityCard />
          </Routes>
        </BrowserRouter>
      )
    ).toMatchSnapshot();
  });
});
