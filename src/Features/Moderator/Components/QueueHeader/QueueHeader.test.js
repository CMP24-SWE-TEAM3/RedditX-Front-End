import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import QueueHeader from "./QueueHeader";

describe("QueueHeader", () => {
  it("test QueueHeader renders correctly", async () => {
    render(
      <TestingComponent>
        <QueueHeader />
      </TestingComponent>
    );
  });
});
