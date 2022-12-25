import { render } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import TestingComponent from "Features/Post/TestingComponent";
import React from "react";

// Import components
import DragAndDropFile from "./DragAndDropFile";

describe("Drag and drop file", () => {
  it("should render without crashing", () => {
    render(
      <TestingComponent>
        <DragAndDropFile files={[]} setFiles={() => "test"} />
      </TestingComponent>
    );
  });
});
