import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import CommunityCard from "./CommunityCard";

describe("the card of community", () => {
  it("should render without crashing", () => {
    render(
      <TestingComponent>
        <CommunityCard />
      </TestingComponent>
    );
  });
});
