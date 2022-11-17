import { render, screen, act, waitFor } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import ChooseCommunity from "./ChooseCommunity";
describe("Choose community", () => {
  it("test search input show", () => {
    render(
      <TestingComponent>
        <ChooseCommunity />
      </TestingComponent>
    );
    const inputCommunity = screen.getByTestId("search-communities");
    let dropDown = screen.queryByTestId("communities-drop-down");
    expect(inputCommunity).toBeVisible();
    expect(dropDown).toBeNull();
    expect(inputCommunity.placeholder).toBe("Choose a community");
    expect(screen.queryByTestId("search-icon")).toBeNull();
    inputCommunity.click();
  });

  it("test search input not show", async () => {
    render(
      <TestingComponent>
        <ChooseCommunity />
      </TestingComponent>
    );
    const inputCommunity = screen.getByTestId("search-communities");
    inputCommunity.click();
    await waitFor(() => {
      expect(inputCommunity.placeholder).toBe("Search communities");
    });
    let dropDown = screen.queryByTestId("communities-drop-down");
    dropDown = screen.queryByTestId("communities-drop-down");
    expect(dropDown).toBeInTheDocument();
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();
  });
});
