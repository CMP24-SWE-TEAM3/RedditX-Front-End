// Import styled components
import { MediaControlsContainer, StyledButton } from "./MediaControls.styled";

// Import icons
import { IoImageOutline } from "react-icons/io5";
import { SlSocialYoutube } from "react-icons/sl";
const MediaControls = ({ addImage, addVideo }) => {
  return (
    <MediaControlsContainer>
      <StyledButton onMouseDown={addImage}>
        <IoImageOutline size={25} />
      </StyledButton>
      <StyledButton onMouseDown={addVideo}>
        <SlSocialYoutube size={25} />
      </StyledButton>
    </MediaControlsContainer>
  );
};

export default MediaControls;
