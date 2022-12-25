import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import QueueHeaderPopup from "./QueueHeaderPopup";

describe("QueueHeaderPopup", () => {
  it("test QueueHeaderPopup renders correctly", async () => {
    render(
      <TestingComponent>
        <QueueHeaderPopup />
      </TestingComponent>
    );
    expect(screen.getByText("Last action taken")).toBeInTheDocument();
    expect(screen.getByText("We’ll let you know if another mod joins you in moderating the community.")).toBeInTheDocument();
    expect(screen.getByText("Last action taken")).toBeInTheDocument();
  });
});
