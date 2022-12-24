import TestingComponent from "Features/Search/TestingComponent";
import { fireEvent, render, screen } from "@testing-library/react";
import RuleHeader from "./RuleHeader";

it("Rule Header should be found", async () => {
  render(
    <TestingComponent>
      <RuleHeader showNote={true} />
    </TestingComponent>
  );
});
