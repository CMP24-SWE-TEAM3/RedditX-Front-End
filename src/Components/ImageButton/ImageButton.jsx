// imports
import React from "react";
import { ImageButtonStyled } from "./ImageButton.styled";
import { RiImage2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

/**
 * Component that displays the image button which directs to create post page to upload image
 *
 * @returns {React.Component}
 */
const ImageButton = () => {
  const navigate = useNavigate();
  return (
    <ImageButtonStyled
      onClick={() => navigate("/submit")}
      id={"create-img-post"}
    >
      <i>
        <RiImage2Line />{" "}
      </i>
    </ImageButtonStyled>
  );
};

export default ImageButton;
