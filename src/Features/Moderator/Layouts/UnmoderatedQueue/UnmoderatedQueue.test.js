import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import UnmoderatedQueue from "./UnmoderatedQueue";

describe("UnmoderatedQueue", () => {
  it("test UnmoderatedQueue renders correctly", async () => {
    render(
      <TestingComponent>
        <UnmoderatedQueue />
      </TestingComponent>
    );
  });
});
