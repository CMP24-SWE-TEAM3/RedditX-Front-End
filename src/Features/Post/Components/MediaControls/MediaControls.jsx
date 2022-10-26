const MediaControls = ({ styles, addAudio, addImage, addVideo }) => {
  return (
    <div style={styles.buttons}>
      <button onMouseDown={addAudio} style={{ marginRight: 10 }}>
        Add Audio
      </button>
      <button onMouseDown={addImage} style={{ marginRight: 10 }}>
        Add Image
      </button>
      <button onMouseDown={addVideo} style={{ marginRight: 10 }}>
        Add Video
      </button>
    </div>
  );
};

export default MediaControls;
