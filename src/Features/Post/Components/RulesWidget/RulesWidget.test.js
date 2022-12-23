import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import RulesWidget from "./RulesWidget";

describe("RulesWidget", () => {
  it("should be able to render without crashing", async () => {
    render(
      <TestingComponent>
        <RulesWidget />
      </TestingComponent>
    );
  });
});
