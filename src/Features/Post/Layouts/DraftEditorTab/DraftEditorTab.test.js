import { render } from "@testing-library/react";

import TestingComponent from "Features/Post/TestingComponent";
import DraftEditorTab from "./DraftEditorTab";

describe("DraftEditor tab", () => {
  it("renders DraftEditor tab component", () => {
    render(
      <TestingComponent>
        <DraftEditorTab />
      </TestingComponent>
    );
  });
});
