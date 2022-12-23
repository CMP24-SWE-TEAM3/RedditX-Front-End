import TestingComponent from "Features/Search/TestingComponent";
import { fireEvent, render, screen } from "@testing-library/react";
import HeaderGraph from "./HeaderGraph";

it("Header Graph should be found", async () => {
  render(
    <TestingComponent>
      <HeaderGraph />
    </TestingComponent>
  );
});
