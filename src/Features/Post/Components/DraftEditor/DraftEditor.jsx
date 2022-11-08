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
  convertFromRaw,
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
        }}
      >
        {props.children}
      </StyledLink>
    </OverlayTrigger>
  );
};

/**
 * DraftEditor component
 * @returns {React.Component} DraftEditor
 */
const DraftEditor = ({ files, setFiles, text, setText }) => {
  const decorator = new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: Link,
    },
  ]);

  // State for draft editor
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty(decorator)
  );

  // Ref for draft editor
  const editorRef = useRef(null);

  // Get link states and functions
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

  // Get media states and functions
  const { addImage, addVideo } = useMedia(
    editorState,
    setEditorState,
    EditorState,
    AtomicBlockUtils,
    files,
    setFiles
  );
  // start console log
  // console.log(raw);
  // end console log

  /**
   * Handler for draft editor focus
   */
  const focus = () => editorRef.current.focus();

  /**
   * Handler for editor state change
   *
   * @param {Object} editorState - Draft editor state
   */
  const onChange = (editorState) => {
    setEditorState(editorState);
    const raw = convertToRaw(editorState.getCurrentContent());
    setText(raw);
  };

  /**
   * We can observe and handle key commands via the handleKeyCommand such as Cmd+B (bold), Cmd+I (italic), Cmd+U (underline).
   *
   * @param {string } command - The name of the command to be executed.
   * @param {Object} editorState - Draft editor state
   * @returns {boolean} - Whether the command was handled.
   */
  function handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return true;
    }
    return false;
  }
  /**
   * Provide my own key binding function to supply custom command strings.
   *
   * @param {Event} e - The event.
   */
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

  /**
   * Handler for block style type change
   *
   * @param {String} blockType - The type of block style to change to.
   */
  function toggleBlockType(blockType) {
    focus();
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  }

  /**
   * Handler for inline style type change
   *
   * @param {String} inlineStyle - The type of inline style to change to.
   */
  function toggleInlineStyle(inlineStyle) {
    focus();
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
