import TestingComponent from "Features/Search/TestingComponent";
import { fireEvent, render, screen } from "@testing-library/react";
import AsideGraph from "./AsideGraph";

it("Aside Graph should be found", async () => {
  render(
    <TestingComponent>
      <AsideGraph />
    </TestingComponent>
  );
});
