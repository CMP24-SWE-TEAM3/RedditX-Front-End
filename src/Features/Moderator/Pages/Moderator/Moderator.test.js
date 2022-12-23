import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import Moderator from "./Moderator";

describe("Moderator", () => {
  it("test Moderator renders correctly", async () => {
    render(
      <TestingComponent>
        <Moderator />
      </TestingComponent>
    );
  });
});
