import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import MediaControls from "./MediaControls";

const mockAddImage = jest.fn();
const mockAddVideo = jest.fn();
describe("Media controls in draft editor", () => {
  it("should render without crashing", () => {
    render(
      <TestingComponent>
        <MediaControls addImage={mockAddImage} addVideo={mockAddVideo} />
      </TestingComponent>
    );
  });
  it("should render link controls components", () => {
    render(
      <TestingComponent>
        <MediaControls addImage={mockAddImage} addVideo={mockAddVideo} />
      </TestingComponent>
    );
    expect(screen.getByTestId("video-btn")).toBeInTheDocument();
    expect(screen.getByTestId("image-btn")).toBeInTheDocument();
    expect(screen.getByTestId("image-input")).toBeInTheDocument();
    expect(screen.getByTestId("video-input")).toBeInTheDocument();
  });
  it("should render prompt for link", () => {
    render(
      <TestingComponent>
        <MediaControls addImage={mockAddImage} addVideo={mockAddVideo} />
      </TestingComponent>
    );
    const videoButton = screen.getByTestId("video-btn");
    const imageButton = screen.getByTestId("image-btn");
    const imageInput = screen.getByTestId("image-input");
    const videoInput = screen.getByTestId("video-input");
    fireEvent.click(videoButton);
    fireEvent.change(videoInput, {
      target: { files: [new File([""], "test.mp4", { type: "video/mp4" })] },
    });
    expect(mockAddVideo).toBeCalled();

    fireEvent.click(imageButton);
    fireEvent.change(imageInput, {
      target: { files: [new File([""], "test.jpg", { type: "image/jpg" })] },
    });
    expect(mockAddImage).toBeCalled();
  });
});
