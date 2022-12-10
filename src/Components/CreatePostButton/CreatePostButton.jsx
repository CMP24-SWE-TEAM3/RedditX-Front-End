// imports
import React from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { GlobalButtonStyled } from "Components/GlobalButton/GlobalButton.styled";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useNavigate } from "react-router-dom";

/**
 * Component that displays the profile button
 *
 * @param props to test against properties
 *
 * @returns {React.Component}
 */
const CreatePostButton = () => {
  const navigate = useNavigate();
  return (
    <OverlayTrigger
      key={"bottom"}
      placement={"bottom"}
      overlay={<Tooltip id={`tooltip-bottom`}>Create Post</Tooltip>}
    >
      <GlobalButtonStyled onClick={() => navigate("/submit")}>
        <HiOutlinePlus />
      </GlobalButtonStyled>
    </OverlayTrigger>
  );
};

export default CreatePostButton;
