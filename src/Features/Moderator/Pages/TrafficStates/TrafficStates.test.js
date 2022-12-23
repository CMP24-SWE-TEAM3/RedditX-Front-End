import TestingComponent from "Features/Search/TestingComponent";
import { fireEvent, render, screen } from "@testing-library/react";
import TrafficStates from "./TrafficStates";

it("Traffic state should be found", async () => {
  render(
    <TestingComponent>
      <TrafficStates />
    </TestingComponent>
  );
});
