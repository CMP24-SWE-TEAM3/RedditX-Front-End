import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import LayoutHeader from "./LayoutHeader";

// TeamPage.test.js
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    subredditId: "company-id1",
    moderatorId: "team-id1",
  }),
}));
describe("LayoutHeader", () => {
  it("test LayoutHeader renders correctly", async () => {
    render(
      <TestingComponent>
        <LayoutHeader />
      </TestingComponent>
    );
    expect(screen.getByText("R/company-id1")).toBeInTheDocument();
    expect(screen.getByText("/ team-id1")).toBeInTheDocument();
  });
});
