import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import DraftEditor from "./DraftEditor";

describe("Draft editor component", () => {
  it("should be able to render draft editor component", async () => {
    render(
      <TestingComponent>
        <DraftEditor
          files={[]}
          setFiles={jest.fn()}
          text={""}
          setText={jest.fn()}
          load={""}
          setTextHTML={jest.fn()}
        />
      </TestingComponent>
    );
  });
});
