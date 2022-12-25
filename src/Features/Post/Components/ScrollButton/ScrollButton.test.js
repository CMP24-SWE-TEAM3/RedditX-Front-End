import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import ScrollButton from "./ScrollButton";


describe("ScrollButton", () => {
  it("should be able to render without crashing", async () => {
    render(
      <TestingComponent>
        <ScrollButton />
      </TestingComponent>
    );
    expect(screen.getByText("Back to Top")).toBeInTheDocument();
  });
});
