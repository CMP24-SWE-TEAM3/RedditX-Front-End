import TestingComponent from "Features/Search/TestingComponent";
import { fireEvent, render, screen } from "@testing-library/react";
import Results from "./Results";

it("Rule Header should be found", async () => {
  render(
    <TestingComponent>
      <Results />
    </TestingComponent>
  );
});
