import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import PostFormFooter from "./PostFormFooter";

describe("Post form footer", () => {
  it("should link and checkbox", () => {
    render(
      <TestingComponent>
        <PostFormFooter />
      </TestingComponent>
    );
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(
      screen.getByText("Connect accounts to share your post")
    ).toBeInTheDocument();
  });
});
