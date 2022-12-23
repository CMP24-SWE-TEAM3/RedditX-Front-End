import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import SpamQueue from "./SpamQueue";

describe("SpamQueue", () => {
  it("test SpamQueue renders correctly", async () => {
    render(
      <TestingComponent>
        <SpamQueue />
      </TestingComponent>
    );
    expect(screen.getByText("Back")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });
});
