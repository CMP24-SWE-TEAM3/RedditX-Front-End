import { useState } from "react";

const useLink = (editorState, setEditorState, RichUtils, EditorState) => {
  // Link
  const [showLinkURLInput, setShowLinkURLInput] = useState(false);
  const [linkUrlValue, setLinkUrlValue] = useState("");
  console.log(editorState, setEditorState, RichUtils, EditorState);
  const onLinkURLChange = (e) => setLinkUrlValue(e.target.value);
  const removeLink = (e) => {
    e.preventDefault();
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      setEditorState(RichUtils.toggleLink(editorState, selection, null));
    }
  };
  const onLinkInputKeyDown = (e) => {
    if (e.which === 13) {
      confirmLink(e);
    }
  };

  const confirmLink = (e) => {
    e.preventDefault();
    const contentState = editorState.getCurrentContent();

    const contentStateWithEntity = contentState.createEntity(
      "LINK",
      "MUTABLE",
      { url: linkUrlValue }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

    // Apply entity
    let nextEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });

    // Apply selection
    nextEditorState = RichUtils.toggleLink(
      nextEditorState,
      nextEditorState.getSelection(),
      entityKey
    );

    setEditorState(nextEditorState);
    setShowLinkURLInput(false);
    setLinkUrlValue("");
  };
  const promptForLink = (e) => {
    e.preventDefault();
    console.log(editorState);
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      const contentState = editorState.getCurrentContent();
      const startKey = editorState.getSelection().getStartKey();
      const startOffset = editorState.getSelection().getStartOffset();
      const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
      const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);
      let url = "";
      if (linkKey) {
        const linkInstance = contentState.getEntity(linkKey);
        url = linkInstance.getData().url;
      }
      // Get selected text
      const selectionState = editorState.getSelection();
      const anchorKey = selectionState.getAnchorKey();
      const currentContent = editorState.getCurrentContent();
      const currentContentBlock = currentContent.getBlockForKey(anchorKey);
      const start = selectionState.getStartOffset();
      const end = selectionState.getEndOffset();
      const selectedText = currentContentBlock.getText().slice(start, end);
      console.log("selectedText", selectedText);
      setLinkUrlValue(url);
      setShowLinkURLInput(true);
    }
  };
  return {
    promptForLink,
    removeLink,
    showLinkURLInput,
    onLinkURLChange,
    linkUrlValue,
    onLinkInputKeyDown,
    confirmLink,
  };
};

export default useLink;
