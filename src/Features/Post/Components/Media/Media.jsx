// Import components
import UploadedMedia from "Features/Post/Components/UploadedMedia/UploadedMedia";

/**
 * The uploaded media (Images and videos) in the draft editor
 *
 * @param {Object} contentState - Content state of draft editor
 * @param {Object} block - Block state of draft editor
 * @returns {React.Component} - The media component
 */
const Media = ({ contentState, block }) => {
  const entity = contentState.getEntity(block.getEntityAt(0));
  const { src } = entity.getData();
  const type = entity.getType();
  if (type === "image") {
    return <UploadedMedia type={"img"} src={src} />;
  } else if (type === "video") {
    return <UploadedMedia type={"video"} controls={true} src={src} />;
  }
};

export default Media;
