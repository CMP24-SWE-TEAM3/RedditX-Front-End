import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import BlockStyleControls from "./BlockStyleControls";

const editorState = {
  getSelection: function () {
    return {
      getStartKey: function () {},
    };
  },
  getCurrentContent: function () {
    return {
      getBlockForKey: function () {
        return {
          getType: function (selection) {
            return {
              getType: function () {
                console.log("getType");
              },
            };
          },
        };
      },
    };
  },
};

const onToggle = () => console.log("onToggle");
describe("Block Style Controls", () => {
  it("test BlockStyleControls renders correctly", async () => {
    render(
      <TestingComponent>
        <BlockStyleControls editorState={editorState} onToggle={onToggle} />
      </TestingComponent>
    );
  });
});
