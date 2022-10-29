import { useEffect, useState } from "react";

const useMedia = (
  editorState,
  setEditorState,
  EditorState,
  AtomicBlockUtils
) => {
  const [showURLInput, setShowURLInput] = useState(false);
  const [urlType, setUrlType] = useState("");
  const [urlValue, setUrlValue] = useState("");
  const [file, setFile] = useState([]);

  useEffect(() => {
    console.log("urlValue", urlValue);
    confirmMedia();
  }, [urlValue]);
  function onURLInputKeyDown(e) {
    if (e.which === 13) {
      confirmMedia(e);
    }
  }
  function promptForMedia(type, file) {
    setShowURLInput(true);
    setUrlValue("");
    setUrlType(type);
    setFile(file);
    const url = URL.createObjectURL(file);
    setUrlValue(() => url);
    // const reader = new FileReader();
    // reader.onload = (x) => {
    //   setUrlValue(() => x.target.result);
    //   console.log("urlValue", urlValue);
    //   confirmMedia();
    // };
    // reader.readAsDataURL(file);
  }
  function addImage(file) {
    promptForMedia("image", file);
  }
  function addVideo(file) {
    promptForMedia("video", file);
  }
  const onURLChange = (e) => setUrlValue(e.target.value);
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
