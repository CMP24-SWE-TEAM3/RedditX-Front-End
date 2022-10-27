import UploadedMedia from "../UploadedMedia/UploadedMedia";

const Media = (props) => {
  const entity = props.contentState.getEntity(props.block.getEntityAt(0));
  const { src } = entity.getData();
  const type = entity.getType();
  if (type === "image") {
    return <UploadedMedia type={"img"} src={src} />;
  } else if (type === "video") {
    return <UploadedMedia type={"video"} controls={true} src={src} />;
  }
};

export default Media;
