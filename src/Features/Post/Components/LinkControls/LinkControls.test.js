import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import LinkControls from "./LinkControls";

const mockPromptForLink = jest.fn();
describe("Link controls of draft editor", () => {
  it("should render without crashing", () => {
    render(
      <TestingComponent>
        <LinkControls />
      </TestingComponent>
    );
  });
  it("should render link controls components", () => {
    render(
      <TestingComponent>
        <LinkControls />
      </TestingComponent>
    );
    expect(screen.getByTestId("link-btn")).toBeInTheDocument();
  });
  it("should render prompt for link", () => {
    render(
      <TestingComponent>
        <LinkControls promptForLink={mockPromptForLink} />
      </TestingComponent>
    );
    const button = screen.getByTestId("link-btn");
    fireEvent.mouseDown(button);
    expect(mockPromptForLink).toBeCalled();
  });
});
