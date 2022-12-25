import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import PageNumber from "./PageNumber";

describe("PageNumber", () => {
  it("test PageNumber renders correctly", async () => {
    render(
      <TestingComponent>
        <PageNumber />
      </TestingComponent>
    );
    expect(screen.getByText("Back")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });
});
