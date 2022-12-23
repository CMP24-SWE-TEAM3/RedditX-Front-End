import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import InlineStyleControls from "./InlineStyleControls";

const editorState = {
  getCurrentInlineStyle: function () {
    return {
      has: function () {
        return true;
      },
    };
  },
};

describe("InlineStyleControls of draft editor", () => {
  it("should render without crashing", () => {
    render(
      <TestingComponent>
        <InlineStyleControls editorState={editorState} onToggle={() => {}} />
      </TestingComponent>
    );
  });
});
