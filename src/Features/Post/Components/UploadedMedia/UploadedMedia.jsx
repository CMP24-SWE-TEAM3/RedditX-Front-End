// Import styled components
import React from "react";

// Import styled components
import { MediaContainer, StyledMedia, /*Input*/ } from "./UploadedMedia.styled";

/**
 * Component for uploaded media in draft editor it is the image or video that appears in
 * the draft editor when the user uploads media
 *
 * @param {String} type - Type of media
 * @param {String} src - Source of media
 * @param {boolean} controls - Alt text of media
 * @returns {React.Component} - UploadedMedia component
 */
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
