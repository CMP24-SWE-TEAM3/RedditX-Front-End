import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import OnlineMembers from "./OnlineMembers";


describe("show members and online members", () => {
  it("should render without crashing", () => {
    render(
      <TestingComponent>
        <OnlineMembers />
      </TestingComponent>
    );
  });
  it("should render its content", () => {
    render(
      <TestingComponent>
        <OnlineMembers online={8} members={10} />
      </TestingComponent>
    );
    const members = screen.getByText("Members");
    const online = screen.getByText("Online");
    expect(members).toBeInTheDocument();
    expect(online).toBeInTheDocument();
    fireEvent.mouseOver(members);
    expect(screen.getByText("10")).toBeInTheDocument();
    fireEvent.mouseOver(online);
    expect(screen.getByText("8")).toBeInTheDocument();
  });
});
