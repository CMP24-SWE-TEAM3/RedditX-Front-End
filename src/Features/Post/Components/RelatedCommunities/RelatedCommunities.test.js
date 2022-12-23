import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import RelatedCommunities from "./RelatedCommunities";

describe("RelatedCommunities", () => {
  it("should be able to render without crashing", async () => {
    render(
      <TestingComponent>
        <RelatedCommunities />
      </TestingComponent>
    );
    expect(screen.getByText("3,047 members")).toBeInTheDocument();
    expect(screen.getByText("r/askegypt")).toBeInTheDocument();
    expect(screen.getByText("Join")).toBeInTheDocument();
  });
});
