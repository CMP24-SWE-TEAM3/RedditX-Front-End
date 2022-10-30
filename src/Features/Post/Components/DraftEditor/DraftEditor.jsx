// Import hooks
import React, { useRef, useState } from "react";

// Import draft editor
import Draft from "draft-js";

// Import components
import BlockStyleControls from "Features/Post/Components/BlockStyleControls/BlockStyleControls";
import InlineStyleControls from "Features/Post/Components/InlineStyleControls/InlineStyleControls";
import MediaControls from "Features/Post/Components/MediaControls/MediaControls";
import Media from "Features/Post/Components/Media/Media";
import LinkControls from "Features/Post/Components/LinkControls/LinkControls";
import DraftLinkForm from "Features/Post/Components/DraftLinkForm/DraftLinkForm";

// Import styled components
import {
  Controls,
  DraftEditorContainer,
  RichEditorEditor,
  Separator,
  StyledPopoverBody,
  StyledPopover,
  StyledLink,
} from "./DraftEditor.styled";

// Import hooks
import useLink from "Features/Post/Hooks/useLink";
import useMedia from "Features/Post/Hooks/useMedia";

// Import bootstrap components
import { OverlayTrigger, Popover } from "react-bootstrap";

// Extract Draft variables
const {
  convertToRaw,
  AtomicBlockUtils,
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  CompositeDecorator,
  Modifier,
} = Draft;

// Link
function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    );
  }, callback);
}

const Link = (props) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  return (
    <OverlayTrigger
      placement={"bottom-start"}
      trigger="click"
      overlay={
        <StyledPopover>
          <StyledPopoverBody>
            <a href={url}>{url}</a> - <button href={url}>Change</button> |{" "}
            <button href={url}>Remove</button>
          </StyledPopoverBody>
        </StyledPopover>
      }
    >
      <StyledLink
        href={url}
        onClick={(e) => {
          e.preventDefault();
          console.log("hello");
        }}
      >
        {props.children}
      </StyledLink>
    </OverlayTrigger>
  );
};

const DraftEditor = () => {
  const decorator = new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: Link,
    },
  ]);
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty(decorator)
  );

  const editorRef = useRef(null);
  const {
    promptForLink,
    removeLink,
    showLinkURLInput,
    onLinkURLChange,
    linkUrlValue,
    onLinkInputKeyDown,
    confirmLink,
    linkTextValue,
    onLinkTextChange,
  } = useLink(
    editorState,
    setEditorState,
    RichUtils,
    EditorState,
    Modifier,
    decorator
  );

  const { addImage, addVideo } = useMedia(
    editorState,
    setEditorState,
    EditorState,
    AtomicBlockUtils
  );
  // start console log
  // const raw = convertToRaw(editorState.getCurrentContent());
  // console.log(raw);
  // end console log

  const focus = () => editorRef.current.focus();
  const onChange = (editorState) => setEditorState(editorState);
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

  return (
    <DraftEditorContainer>
      <>
        <Controls>
          <InlineStyleControls
            editorState={editorState}
            onToggle={toggleInlineStyle}
          />
          <LinkControls promptForLink={promptForLink} />
          <Separator />
          <BlockStyleControls
            editorState={editorState}
            onToggle={toggleBlockType}
          />
          <Separator />
          <MediaControls addImage={addImage} addVideo={addVideo} />
        </Controls>
        <OverlayTrigger
          trigger="click"
          placement="bottom-start"
          show={showLinkURLInput}
          overlay={
            <Popover>
              <DraftLinkForm
                onLinkURLChange={onLinkURLChange}
                onLinkTextChange={onLinkTextChange}
                linkUrlValue={linkUrlValue}
                linkTextValue={linkTextValue}
                onLinkInputKeyDown={onLinkInputKeyDown}
                confirmLink={confirmLink}
              />
            </Popover>
          }
        >
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
        </OverlayTrigger>
      </>
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

export default DraftEditor;
