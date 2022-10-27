// Import hooks
import React, { useRef, useState } from "react";

// Import draft editor
import Draft from "draft-js";

// Import components
import BlockStyleControls from "../BlockStyleControls/BlockStyleControls";
import InlineStyleControls from "../InlineStyleControls/InlineStyleControls";
import MediaControls from "../MediaControls/MediaControls";
import UploadedMedia from "../UploadedMedia/UploadedMedia";

// Import styled components
import {
  Controls,
  DraftEditorContainer,
  RichEditorEditor,
} from "./DraftEditor.styled";

// Extract Draft variables
const {
  convertToRaw,
  AtomicBlockUtils,
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
} = Draft;

const DraftEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [showURLInput, setShowURLInput] = useState(false);
  const [urlType, setUrltype] = useState("");
  const [urlValue, setUrlValue] = useState("");
  const editorRef = useRef(null);
  const urlRef = useRef(null);
  // start console log
  const raw = convertToRaw(editorState.getCurrentContent());
  console.log(raw);
  // end console log

  const focus = () => editorRef.current.focus();
  const onChange = (editorState) => setEditorState(editorState);

  const onURLChange = (e) => setUrlValue(e.target.value);
  function _confirmMedia(e) {
    e.preventDefault();
    // const { editorState, urlValue, urlType } = this.state;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      urlType,
      "IMMUTABLE",
      { src: urlValue }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });
    setEditorState(
      AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ")
    );
    setShowURLInput(false);
    setUrlValue("");
  }
  function handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return true;
    }
    return false;
  }
  function mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
      if (newEditorState !== editorState) {
        onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }
  function toggleBlockType(blockType) {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  }
  function toggleInlineStyle(inlineStyle) {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  }

  function onURLInputKeyDown(e) {
    if (e.which === 13) {
      _confirmMedia(e);
    }
  }
  function promptForMedia(type) {
    setShowURLInput(true);
    setUrlValue("");
    setUrltype(type);
  }
  function addImage() {
    promptForMedia("image");
  }
  function addVideo() {
    promptForMedia("video");
  }

  return (
    <DraftEditorContainer>
      <Controls>
        <InlineStyleControls
          editorState={editorState}
          onToggle={toggleInlineStyle}
        />
        <BlockStyleControls
          editorState={editorState}
          onToggle={toggleBlockType}
        />
        <MediaControls addImage={addImage} addVideo={addVideo} />
      </Controls>
      <RichEditorEditor onClick={focus}>
        <Editor
          blockStyleFn={getBlockStyle}
          customStyleMap={styleMap}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          onChange={onChange}
          placeholder="Text (optional)"
          ref={editorRef}
          spellCheck={true}
          blockRendererFn={mediaBlockRenderer}
        />
      </RichEditorEditor>
      {showURLInput && (
        <div>
          <input
            onChange={onURLChange}
            ref={urlRef}
            type="text"
            value={urlValue}
            onKeyDown={onURLInputKeyDown}
          />
          <button onMouseDown={_confirmMedia}>Confirm</button>
        </div>
      )}
    </DraftEditorContainer>
  );
};

// Custom overrides for "code" style.
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
function getBlockStyle(block) {
  switch (block.getType()) {
    case "blockquote":
      return "RichEditor-blockquote";
    default:
      return null;
  }
}

function mediaBlockRenderer(block) {
  if (block.getType() === "atomic") {
    return {
      component: Media,
      editable: false,
    };
  }
  return null;
}

const Media = (props) => {
  const entity = props.contentState.getEntity(props.block.getEntityAt(0));
  const { src } = entity.getData();
  const type = entity.getType();
  if (type === "image") {
    return <UploadedMedia type={"img"} src={src} />;
  } else if (type === "video") {
    return <UploadedMedia type={"video"} controls={true} src={src} />;
  }
};

export default DraftEditor;
