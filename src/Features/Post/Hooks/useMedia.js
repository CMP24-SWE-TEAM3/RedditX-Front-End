import { useState } from "react";

const useMedia = (
  editorState,
  setEditorState,
  EditorState,
  AtomicBlockUtils
) => {
  const [showURLInput, setShowURLInput] = useState(false);
  const [urlType, setUrltype] = useState("");
  const [urlValue, setUrlValue] = useState("");
  function onURLInputKeyDown(e) {
    if (e.which === 13) {
      confirmMedia(e);
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
  const onURLChange = (e) => setUrlValue(e.target.value);
  function confirmMedia(e) {
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
  return {
    showURLInput,
    onURLChange,
    urlValue,
    onURLInputKeyDown,
    confirmMedia,
    addImage,
    addVideo,
  };
};

export default useMedia;
