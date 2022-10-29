// Import styled components
import { MediaControlsContainer, StyledButton } from "./MediaControls.styled";

// Import icons
import { IoImageOutline } from "react-icons/io5";
import { SlSocialYoutube } from "react-icons/sl";
import { useRef } from "react";
const MediaControls = ({ addImage, addVideo }) => {
  const imageRef = useRef();
  const videoRef = useRef();
  return (
    <MediaControlsContainer>
      <StyledButton onClick={() => imageRef.current.click()}>
        <IoImageOutline size={25} />
      </StyledButton>
      <input
        as={"input"}
        type="file"
        accept="image/*"
        onChange={(e) => addImage(e.target.files[0])}
        ref={imageRef}
        hidden
      />

      <StyledButton onClick={() => videoRef.current.click()}>
        <SlSocialYoutube size={25} />
      </StyledButton>
      <input
        type="file"
        accept="video/*"
        onChange={(e) => addVideo(e.target.files[0])}
        ref={videoRef}
        hidden
      />
    </MediaControlsContainer>
  );
};

export default MediaControls;
