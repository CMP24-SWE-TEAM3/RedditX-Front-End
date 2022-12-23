// imports
import React from "react";
import { TfiPlus } from "react-icons/tfi";
import { GlobalButtonStyled } from "Components/GlobalButton/GlobalButton.styled";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useNavigate } from "react-router-dom";

/**
 * Component that navigates to create post page
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
        <TfiPlus size={22} />
      </GlobalButtonStyled>
    </OverlayTrigger>
  );
};

export default CreatePostButton;
