import { useEffect, useState } from "react";

const useMedia = (
  editorState,
  setEditorState,
  EditorState,
  AtomicBlockUtils
) => {
  const [urlType, setUrlType] = useState("");
  const [urlValue, setUrlValue] = useState("");
  const [file, setFile] = useState([]);

  useEffect(() => {
    confirmMedia();
  }, [urlValue]);

  function promptForMedia(type, file) {
    setUrlValue("");
    setUrlType(type);
    setFile(file);
    const url = URL.createObjectURL(file);
    setUrlValue(() => url);
  }
  function addImage(file) {
    promptForMedia("image", file);
  }
  function addVideo(file) {
    promptForMedia("video", file);
  }
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
