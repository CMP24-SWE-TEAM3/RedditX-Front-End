// Import styled components
import { MediaControlsContainer, StyledButton } from "./MediaControls.styled";

// Import icons
import { IoImageOutline } from "react-icons/io5";
import { SlSocialYoutube } from "react-icons/sl";

// Import hooks
import { useRef } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

/**
 * The media control in the draft editor
 * media controls like image & video
 *
 * @param {Function} addImage - Function to handle adding image
 * @param {Function} addVideo - Function to handle adding video
 * @returns {React.Component} - The media control in the draft editor
 */
const MediaControls = ({ addImage, addVideo }) => {
  // Ref for the image input
  const imageRef = useRef();

  // Ref for the video input
  const videoRef = useRef();
  return (
    <MediaControlsContainer>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="button-tooltip-2">Add an image</Tooltip>}
      >
        <StyledButton
          id="Add-an-image"
          onClick={() => imageRef.current.click()}
        >
          <IoImageOutline size={25} />
        </StyledButton>
      </OverlayTrigger>
      <input
        as={"input"}
        type="file"
        accept="image/*"
        onChange={(e) => addImage(e.target.files[0])}
        ref={imageRef}
        hidden
      />
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="button-tooltip-2">Add a video</Tooltip>}
      >
        <StyledButton id="Add-a-video" onClick={() => videoRef.current.click()}>
          <SlSocialYoutube size={25} />
        </StyledButton>
      </OverlayTrigger>
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
