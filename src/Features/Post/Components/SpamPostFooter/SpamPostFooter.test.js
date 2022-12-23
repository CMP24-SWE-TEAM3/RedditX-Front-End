import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import SpamPostFooter from "./SpamPostFooter";

describe("SpamPostFooter", () => {
  it("renders Main component", () => {
    render(
      <TestingComponent>
        <SpamPostFooter />
      </TestingComponent>
    );
    expect(screen.getByText("Approve")).toBeVisible();
    expect(screen.getByText("Flairs")).toBeVisible();
  });
});
