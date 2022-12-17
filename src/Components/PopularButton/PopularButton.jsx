// imports
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import {
  ButtonsGroupStyled,
  GlobalButtonStyled,
} from "Components/GlobalButton/GlobalButton.styled";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useNavigate } from "react-router-dom";

/**
 * Component that directs to popular page
 * @returns {React.Component}
 */
const PopularButton = () => {
  const navigate = useNavigate();
  return (
    <ButtonsGroupStyled>
      <OverlayTrigger
        key={"bottom"}
        placement={"bottom"}
        overlay={<Tooltip id={`tooltip-bottom`}>Popular</Tooltip>}
      >
        <GlobalButtonStyled onClick={() => navigate("/popular")}>
          <BsArrowUpRightCircle size={22} />
        </GlobalButtonStyled>
      </OverlayTrigger>
    </ButtonsGroupStyled>
  );
};

export default PopularButton;
