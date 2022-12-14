import { fireEvent, render, screen } from "@testing-library/react";
import TestingComponent from "Features/Search/TestingComponent";
import Posts from "./Posts";
// import Explore from "./Explore";
// import FlairPage from "./FlairPage";
describe("flair page", () => {
  it("this is a test for Posts Component", () => {
    <TestingComponent>
      render(
      <Posts />
      );
    </TestingComponent>;
  });
});
