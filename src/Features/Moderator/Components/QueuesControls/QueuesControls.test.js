import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import QueuesControls from "./QueuesControls";

describe("QueuesControls", () => {
  it("test QueuesControls renders correctly", async () => {
    render(
      <TestingComponent>
        <QueuesControls />
      </TestingComponent>
    );
  });
});
