import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import PostGuidelines from "./PostGuidelines";


describe("Post form footer", () => {
  it("should contain 5 table data", () => {
    render(
      <TestingComponent>
        <PostGuidelines />
      </TestingComponent>
    );
    expect(screen.getAllByRole("cell").length).toBe(5);
  });

  it("should contain 5 guide lines", () => {
    render(
      <TestingComponent>
        <PostGuidelines />
      </TestingComponent>
    );
    expect(screen.getByAltText("post guidelines")).toBeInTheDocument();
    expect(
      screen.getByRole("cell", { name: "1. Remember the human" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("cell", {
        name: "2. Behave like you would in real life",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("cell", {
        name: "3. Look for the original source of content",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("cell", {
        name: "4. Search for duplicates before posting",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("cell", { name: "5. Read the community’s rules" })
    ).toBeInTheDocument();
  });
});
