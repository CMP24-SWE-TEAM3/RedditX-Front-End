import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import StyleControlButton from "./StyleControlButton";

const mockOnToggle = jest.fn();

describe("StyleControlButton in draft editor", () => {
  it("should render without crashing", () => {
    render(
      <TestingComponent>
        <StyleControlButton onToggle={mockOnToggle} label="test" />
      </TestingComponent>
    );
  });

  it("should render its content", () => {
    render(
      <TestingComponent>
        <StyleControlButton onToggle={mockOnToggle} label="test" />
      </TestingComponent>
    );
    const button = screen.getByTestId("style-control-button");
    fireEvent.mouseOver(button);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
  it("should handle toggle on click", () => {
    render(
      <TestingComponent>
        <StyleControlButton onToggle={mockOnToggle} label="test" />
      </TestingComponent>
    );
    const button = screen.getByTestId("style-control-button");
    fireEvent.mouseDown(button);
    expect(mockOnToggle).toHaveBeenCalled();
  });
});
