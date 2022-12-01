import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import CommunityOptions from "./CommunityOptions";

describe("Community options drop down", () => {
  it("should render without crashing", () => {
    render(
      <TestingComponent>
        <CommunityOptions />
      </TestingComponent>
    );
  });
});
