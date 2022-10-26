import React, { useRef, useState } from "react";
import Draft from "draft-js";
import BlockStyleControls from "../BlockStyleControls/BlockStyleControls";
import InlineStyleControls from "../InlineStyleControls/InlineStyleControls";
import MediaControls from "../MediaControls/MediaControls";
import { Controls, DraftEditorContainer, RichEditorEditor } from "./DraftEditor.styled";
const {
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
  function addAudio() {
    promptForMedia("audio");
  }
  function addImage() {
    promptForMedia("image");
  }
  function addVideo() {
    promptForMedia("video");
  }

  //   In render function
  // If the user changes block type before entering any text, we can
  // either style the placeholder or hide it. Let's just hide it now.
  let className = "RichEditor-editor";

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
        <MediaControls
          styles={styles}
          addAudio={addAudio}
          addImage={addImage}
          addVideo={addVideo}
        />
        {showURLInput && (
          <div style={styles.urlInputContainer}>
            <input
              onChange={onURLChange}
              ref={urlRef}
              style={styles.urlInput}
              type="text"
              value={urlValue}
              onKeyDown={onURLInputKeyDown}
            />
            <button onMouseDown={_confirmMedia}>Confirm</button>
          </div>
        )}
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
const Audio = (props) => {
  return <audio controls src={props.src} style={styles.media} />;
};
const Image = (props) => {
  return <img src={props.src} style={styles.media} alt="uploaded" />;
};
const Video = (props) => {
  return <video controls src={props.src} style={styles.media} />;
};
const Media = (props) => {
  const entity = props.contentState.getEntity(props.block.getEntityAt(0));
  const { src } = entity.getData();
  const type = entity.getType();
  let media;
  if (type === "audio") {
    media = <Audio src={src} />;
  } else if (type === "image") {
    media = <Image src={src} />;
  } else if (type === "video") {
    media = <Video src={src} />;
  }
  return media;
};
const styles = {
  root: {
    fontFamily: "'Georgia', serif",
    padding: 20,
    width: 600,
  },
  buttons: {
    marginBottom: 10,
  },
  urlInputContainer: {
    marginBottom: 10,
  },
  urlInput: {
    fontFamily: "'Georgia', serif",
    marginRight: 10,
    padding: 3,
  },
  editor: {
    border: "1px solid #ccc",
    cursor: "text",
    minHeight: 80,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: "center",
  },
  media: {
    width: "100%",
    // Fix an issue with Firefox rendering video controls
    // with 'pre-wrap' white-space
    whiteSpace: "initial",
  },
};

export default DraftEditor;
