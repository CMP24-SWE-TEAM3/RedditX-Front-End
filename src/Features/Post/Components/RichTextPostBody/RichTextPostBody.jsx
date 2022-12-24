// Import draft editor
import Draft from "draft-js";
import { useState } from "react";
import Media from "../Media/Media";

import { RichEditorEditor } from "./RichTextPostBody.styled";

// Extract Draft variables
const { convertFromRaw, Editor, EditorState } = Draft;

// Custom styling.
const styleMap = {
  CODE: {
    backgroundColor: "#f6f7f8",
    caretColor: "rgb(0, 0, 0)",
    color: "#ff006d",
    fontFamily: `"Noto Mono", Menlo, Monaco, Consolas, monospace`,
    padding: "0.1em 0.2em",
    fontSize: "0.8em",
    borderRadius: "3px",
  },
  SUPERSCRIPT: {
    color: "#1c1c1c",
    verticalAlign: "super",
    fontSize: "12px",
  },
  SPOILER: {
    backgroundColor: "#545452",
    borderRadius: "2px",
    caretColor: "#fff",
    color: "#fff",
    display: "inline-block",
    margin: "0 3px",
    padding: "0 4px",
  },
};

/**
 * RichTextPostBody a component that renders a post body in rich text format
 *
 * @param {Object} post - Post object
 * @returns {React.Component} - RichTextPostBody component
 */
const RichTextPostBody = ({ post }) => {
  // console.log("RichTextPostBody", post.text, post);
  // State for draft editor
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromRaw(JSON.parse(post.textJSON)))
  );
  function mediaBlockRenderer(block) {
    if (block.getType() === "atomic") {
      return {
        component: Media,
        editable: false,
      };
    }
    return null;
  }
  function getBlockStyle(block) {
    switch (block.getType()) {
      case "blockquote":
        return "RichEditor-blockquote";
      default:
        return null;
    }
  }

  return (
    <RichEditorEditor>
      <Editor
        customStyleMap={styleMap}
        blockRendererFn={mediaBlockRenderer}
        editorState={editorState}
        blockStyleFn={getBlockStyle}
        readOnly={true}
      />
    </RichEditorEditor>
  );
};

export default RichTextPostBody;
