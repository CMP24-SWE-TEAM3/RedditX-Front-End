// Import hooks
import { useEffect, useState } from "react";

/**
 * Custom hook to handle media state in draft editor
 * @param {Function} setFiles - Function to set all uploaded files in state
 * @param {Array} files - All uploaded files
 * @param {Object} editorState - Editor state
 * @param {Object} setEditorState - Editor state setter
 * @param {Object} EditorState -The top-level state object for the editor.
 * @param {Set} AtomicBlockUtils - The AtomicBlockUtils module is a static set of utility functions for atomic block editing.
 * @returns {Object} - The media state
 */
const useMedia = (
  editorState,
  setEditorState,
  EditorState,
  AtomicBlockUtils,
  files,
  setFiles
) => {
  // State to store media file type (image, video)
  const [urlType, setUrlType] = useState("");
  // State to store media file url
  const [urlValue, setUrlValue] = useState("");
  // State to store media file
  const [file, setFile] = useState([]);

  useEffect(() => {
    confirmMedia();
  }, [urlValue]);

  /**
   * Handler for add media in draft editor (Called when user click on add media button)
   *
   * @param {String} type - The type of media file
   * @param {File} file - The media file
   */
  function promptForMedia(type, file) {
    setUrlValue("");
    setUrlType(type);
    setFile(file);
    setFiles([...files, file]);
    const url = URL.createObjectURL(file);
    setUrlValue(() => url);
  }

  /**
   * Function handle adding images in draft editor
   *
   * @param {File} file - The media(image) file
   */
  function addImage(file) {
    promptForMedia("image", file);
  }

  /**
   * Function handle adding videos in draft editor
   *
   * @param {File} file - The media(video) file
   */
  function addVideo(file) {
    promptForMedia("video", file);
  }
  /**
   * Handler for confirm media (Called when user uploads media file)
   */
  function confirmMedia() {
    // e.preventDefault();
    // const { editorState, urlValue, urlType } = this.state;
    if (urlValue === "") return;
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
    setUrlValue("");
  }
  return {
    addImage,
    addVideo,
  };
};

export default useMedia;
