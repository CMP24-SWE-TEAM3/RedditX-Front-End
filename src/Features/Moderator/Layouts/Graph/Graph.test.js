import TestingComponent from "Features/Search/TestingComponent";
import { fireEvent, render, screen } from "@testing-library/react";
import Graph from "./Graph";

it("Graph should be found", async () => {
  render(
    <TestingComponent>
      <Graph />
    </TestingComponent>
  );
});
