// Import hooks
import { useState } from "react";

/**
 * Custom hook to handle link state in draft editor
 *
 * @param {Object} editorState - Editor state
 * @param {Object} setEditorState - Editor state setter
 * @param {Object} RichUtils - The RichUtils module is a static set of utility functions for rich text editing.
 * @param {Object} EditorState -The top-level state object for the editor.
 * @param {Object} Modifier - The Modifier module is a static set of utility functions that encapsulate common edit operations on ContentState objects.
 * @param {Object} decorator - The decorator object is used to customize the rendering of content.
 * @returns {Object} - The link state
 */
const useLink = (
  editorState,
  setEditorState,
  RichUtils,
  EditorState,
  Modifier,
  decorator
) => {
  // State to handle link show and hide
  const [showLinkURLInput, setShowLinkURLInput] = useState(false);
  // State to store input link
  const [linkUrlValue, setLinkUrlValue] = useState("");
  // State to store input link title
  const [linkTextValue, setLinkTextValue] = useState("");
  // State tell whether there is a selection or not
  const [isNoTextSelected, setIsNoTextSelected] = useState(false);

  /**
   * Link url change handler
   *
   * @param {Event} e - The event object
   */
  const onLinkURLChange = (e) => setLinkUrlValue(e.target.value);
  /**
   * Link text change handler
   *
   * @param {Event} e - The event object
   */
  const onLinkTextChange = (e) => setLinkTextValue(e.target.value);
  /**
   * Handler for link remove
   *
   * @param {Event} e - The event object
   */
  const removeLink = (e) => {
    e.preventDefault();
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      setEditorState(RichUtils.toggleLink(editorState, selection, null));
    }
  };

  /**
   * Handler for enter key press
   * @param {Event} e - The event object
   */
  const onLinkInputKeyDown = (e) => {
    if (e.which === 13) {
      confirmLink(e);
    }
  };

  /**
   * Function to handle link confirm (called when the link submit button is clicked)
   *
   * @param {Event} e - The event object
   */
  const confirmLink = (e) => {
    e.preventDefault();
    if (isNoTextSelected) {
      onAddLink(editorState, setEditorState);
      setIsNoTextSelected(false);
      return;
    }
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
    setLinkTextValue("");
  };

  /**
   * Function to handle link add to text
   *
   * @param {Object} editorState - Editor state
   * @param {Function} setEditorState - Editor state setter
   */
  const onAddLink = (editorState, setEditorState) => {
    const currentContent = editorState.getCurrentContent();
    const createEntity = currentContent.createEntity("LINK", "MUTABLE", {
      url: linkUrlValue,
    });
    let entityKey = currentContent.getLastCreatedEntityKey();
    const selection = editorState.getSelection();
    const textWithEntity = Modifier.insertText(
      currentContent,
      selection,
      linkTextValue,
      null,
      entityKey
    );
    let newState = EditorState.createWithContent(textWithEntity, decorator);
    setEditorState(newState);
    setShowLinkURLInput(false);
    setLinkUrlValue("");
    setLinkTextValue("");
  };

  /**
   * Handler for link add (called when the add link button is clicked)
   *
   * @param {Event} e - The event object
   */
  const promptForLink = (e) => {
    e.preventDefault();
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
      setLinkUrlValue(url);
      setLinkTextValue(selectedText);
      setShowLinkURLInput(true);
    } else {
      setIsNoTextSelected(true);
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
    linkTextValue,
    onLinkTextChange,
  };
};

export default useLink;
