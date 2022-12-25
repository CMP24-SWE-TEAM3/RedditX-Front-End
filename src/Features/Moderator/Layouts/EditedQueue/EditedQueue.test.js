import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import EditedQueue from "./EditedQueue";

describe("EditedQueue", () => {
  it("test EditedQueue renders correctly", async () => {
    render(
      <TestingComponent>
        <EditedQueue />
      </TestingComponent>
    );
    expect(screen.getByText("Back")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });
});
