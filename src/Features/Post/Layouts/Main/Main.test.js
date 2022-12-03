import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import Main from "./Main";

jest.mock("Features/Post/Services/submitPost", () => (fetchData, auth) => {});

describe("Main section", () => {
  it("renders Main component", () => {
    render(
      <TestingComponent>
        <Main />
      </TestingComponent>
    );
    const headingElement = screen.getByText("Create a post");
    expect(headingElement).toBeVisible();
  });
});
