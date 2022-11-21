import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import UploadedMedia from "./UploadedMedia";

describe("Uploaded media in draft editor", () => {
  it("should be able to render image without crashing", () => {
    render(
      <TestingComponent>
        <UploadedMedia type="img" src="test" controls={false} />
      </TestingComponent>
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
