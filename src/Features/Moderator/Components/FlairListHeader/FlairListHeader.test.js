import { fireEvent, render, screen } from "@testing-library/react";
import TestingComponent from "Features/Search/TestingComponent";
import FlairListHeader from "./FlairListHeader";
// import FlairPage from "./FlairPage";
describe("FlairListHeader.styled", () => {
  it("this is a test for FlairListHeader", () => {
    <TestingComponent>
      render(
      <FlairListHeader />
      );
    </TestingComponent>;
  });
});
