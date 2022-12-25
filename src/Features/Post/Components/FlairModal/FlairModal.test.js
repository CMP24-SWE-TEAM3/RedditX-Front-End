import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import FlairModal from "./FlairModal";

const mockSetFlairIndex = jest.fn();

const mockFlairs = [
  {
    id: "t7_63248d012f459a937e2684fd",
    flairText: "Flair 1 text",
    flairBackGroundColor: "rgb(70, 209, 96)",
    flairTextColor: "rgb(255, 255, 255)",
    modOnly: true,
    allowUserEdits: true,
  },
  {
    id: "t7_63248d012f459a937e1223123d",
    flairText: "Flair 2 text",
    flairBackGroundColor: "blue",
    flairTextColor: "rgb(255, 255, 255)",
    modOnly: true,
    allowUserEdits: true,
  },
  {
    id: "t1_632012f459a937e1223123d",
    flairText: "Flair 3 text",
    flairBackGroundColor: "red",
    flairTextColor: "rgb(70, 209, 96)",
    modOnly: true,
    allowUserEdits: true,
  },
];
describe("Flair modal", () => {
  it("should render Flair modal", () => {
    render(
      <TestingComponent>
        <FlairModal show={true} flairList={mockFlairs} flairIndex={null} />
      </TestingComponent>
    );
  });

  it("should render Flair modal contents", () => {
    render(
      <TestingComponent>
        <FlairModal
          show={true}
          flairList={mockFlairs}
          flairIndex={null}
          isLoading={false}
        />
      </TestingComponent>
    );
    expect(
      screen.getByRole("button", { name: "Clear Flair" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Apply" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search for flair")).toBeInTheDocument();
    expect(screen.getByText("No flair selected")).toBeInTheDocument();
  });
});
