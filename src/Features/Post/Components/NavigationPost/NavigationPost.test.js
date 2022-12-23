import { render } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import React from "react";

// Import components
import NavigationPost from "./NavigationPost";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Navigation Post", () => {
  it("should render without crashing", () => {
    render(
      <TestingComponent>
        <NavigationPost />
      </TestingComponent>
    );
  });
});
