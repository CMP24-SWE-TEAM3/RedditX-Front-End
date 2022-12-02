import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import FlairModal from "./FlairModal";

const mockSetFlairIndex = jest.fn();
const mockFlairs = [
  {
    id: "t7_63248d012f459a937e2684fd",
    text: "Flair 1 text",
    flairBackGroundColor: "rgb(70, 209, 96)",
    flairTextColor: "rgb(255, 255, 255)",
    modOnly: true,
    allowUserEdits: true,
  },
  {
    id: "t7_63248d012f459a937e1223123d",
    text: "Flair 2 text",
    flairBackGroundColor: "blue",
    flairTextColor: "rgb(255, 255, 255)",
    modOnly: true,
    allowUserEdits: true,
  },
  {
    id: "t1_632012f459a937e1223123d",
    text: "Flair 3 text",
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
        <FlairModal show={true} flairList={mockFlairs} flairIndex={null} />
      </TestingComponent>
    );

    expect(screen.getByText("Flair 1 text")).toBeInTheDocument();
    expect(screen.getByText("Flair 2 text")).toBeInTheDocument();
    expect(screen.getByText("Flair 3 text")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Clear Flair" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Apply" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search for flair")).toBeInTheDocument();
    expect(screen.getByText("No flair selected")).toBeInTheDocument();
  });

  it("should call set flair index on flair select", () => {
    render(
      <TestingComponent>
        <FlairModal
          setFlairIndex={mockSetFlairIndex}
          show={true}
          flairList={mockFlairs}
          flairIndex={null}
        />
      </TestingComponent>
    );

    const flair = screen.getByText("Flair 1 text");
    fireEvent.click(flair);
    expect(mockSetFlairIndex).toBeCalledTimes(1);
  });

  it("should render edit flair on flair select", () => {
    render(
      <TestingComponent>
        <FlairModal
          setFlairIndex={mockSetFlairIndex}
          show={true}
          flairList={mockFlairs}
          flairIndex={0}
        />
      </TestingComponent>
    );
    const flair = screen.getByText("Flair 1 text");
    fireEvent.click(flair);
    expect(screen.getByText("EDIT FLAIR")).toBeInTheDocument();
    expect(
      screen.getByText("Allows text and up to 10 emojis")
    ).toBeInTheDocument();
    const flairNameInput = screen.getByRole("textbox");
    expect(flairNameInput).toBeInTheDocument();
    expect(flairNameInput).toHaveValue("Flair 1 text");
  });

  it("should render error messages if flair text is empty", () => {
    render(
      <TestingComponent>
        <FlairModal
          setFlairIndex={mockSetFlairIndex}
          show={true}
          flairList={mockFlairs}
          flairIndex={0}
        />
      </TestingComponent>
    );
    const flair = screen.getByText("Flair 1 text");
    fireEvent.click(flair);
    const flairNameInput = screen.getByRole("textbox");
    fireEvent.change(flairNameInput, { target: { value: "" } });
    expect(
      screen.getByText("Error: text or emoji is required")
    ).toBeInTheDocument();
  });

  it("should not render edit flair on clear flair click", () => {
    const { rerender } = render(
      <TestingComponent>
        <FlairModal
          setFlairIndex={mockSetFlairIndex}
          show={true}
          flairList={mockFlairs}
          flairIndex={0}
        />
      </TestingComponent>
    );
    const flair = screen.getByText("Flair 1 text");
    fireEvent.click(flair);
    const flairNameInput = screen.getByRole("textbox");
    fireEvent.change(flairNameInput, { target: { value: "" } });
    const clearFlair = screen.getByRole("button", { name: "Clear Flair" });
    expect(clearFlair).toBeInTheDocument();
    fireEvent.click(clearFlair);
    rerender(
      <TestingComponent>
        <FlairModal
          setFlairIndex={mockSetFlairIndex}
          show={true}
          flairList={mockFlairs}
          flairIndex={null}
        />
      </TestingComponent>
    );
    expect(screen.queryByText("EDIT FLAIR")).not.toBeInTheDocument();
  });

  it("should render matched flair on search", () => {
    const { rerender } = render(
      <TestingComponent>
        <FlairModal
          setFlairIndex={mockSetFlairIndex}
          show={true}
          flairList={mockFlairs}
          flairIndex={null}
        />
      </TestingComponent>
    );
    expect(screen.getByText("Flair 1 text")).toBeInTheDocument();
    expect(screen.getByText("Flair 2 text")).toBeInTheDocument();
    expect(screen.getByText("Flair 3 text")).toBeInTheDocument();

    const flairSearchInput = screen.getByPlaceholderText("Search for flair");
    expect(flairSearchInput).toBeInTheDocument();
    fireEvent.change(flairSearchInput, { target: { value: "2" } });
    expect(screen.queryByText("Flair 1 text")).not.toBeInTheDocument();
    expect(screen.queryByText("Flair 3 text")).not.toBeInTheDocument();
    expect(screen.getByText("Flair 2 text")).toBeInTheDocument();
  });
});
