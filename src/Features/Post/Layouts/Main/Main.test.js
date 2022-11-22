import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import Main from "./Main";

describe("Main section", () => {
  it("renders Main component", () => {
    render(
      <TestingComponent>
        <Main />
      </TestingComponent>
    );
    const headingElement = screen.getByText("Create a post");
    expect(headingElement).toBeVisible();
  });
});
