import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import LayoutTabs from "./LayoutTabs";

describe("LayoutTabs", () => {
  it("test LayoutTabs renders correctly", async () => {
    render(
      <TestingComponent>
        <LayoutTabs />
      </TestingComponent>
    );
    expect(screen.getByText("Spam")).toBeInTheDocument();
    expect(screen.getByText("Edited")).toBeInTheDocument();
    expect(screen.getByText("Unmoderated")).toBeInTheDocument();
    expect(screen.getByText("Muted")).toBeInTheDocument();
    expect(screen.getByText("Moderators")).toBeInTheDocument();
    expect(screen.getByText("Approved")).toBeInTheDocument();
    expect(screen.getByText("Post flair")).toBeInTheDocument();
    expect(screen.getByText("Rules")).toBeInTheDocument();
    expect(screen.getByText("Traffic states")).toBeInTheDocument();
    expect(screen.getByText("Community settings")).toBeInTheDocument();
  });
});
