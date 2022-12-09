// imports
import React from "react";
import { IconStyled, LinkButtonStyled } from "./LinkButton.styled";
import { useNavigate } from "react-router-dom";

/**
 * Component that displays a link button which directs to create post page to upload  link
 * @returns {React.Component}
 */
const LinkButton = () => {
  const navigate = useNavigate();
  return (
    <LinkButtonStyled
      id={"create-link-post"}
      onClick={() => navigate("/submit")}
    >
      <IconStyled />
    </LinkButtonStyled>
  );
};

export default LinkButton;
