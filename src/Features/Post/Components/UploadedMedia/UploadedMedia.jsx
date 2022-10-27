// Import styled components
import { Input, MediaContainer, StyledMedia } from "./UploadedMedia.styled";

const UploadedMedia = ({ type, src, controls }) => {
  return (
    <MediaContainer>
      <StyledMedia as={type} src={src} controls={controls} alt="uploaded" />
      {/* <Input
        type="text"
        placeholder="Add caption"
        onChange={() => console.log("hello")}
      /> */}
    </MediaContainer>
  );
};

export default UploadedMedia;
