import TestingComponent from "Features/Search/TestingComponent";
import { fireEvent, render, screen } from "@testing-library/react";
import Tables from "./Tables";

it("Tables should be found", async () => {
  render(
    <TestingComponent>
      <Tables />
    </TestingComponent>
  );
});
