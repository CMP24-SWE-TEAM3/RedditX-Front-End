// imports
import React from 'react';
import {BsArrowUpRightCircle} from 'react-icons/bs'
import {ButtonsGroupStyled, GlobalButtonStyled} from 'Components/GlobalButton/GlobalButton.styled'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

/**
 * Component that directs to popular page
 * @returns {React.Component}
 */
const PopularButton = () => {
    return (
        <ButtonsGroupStyled>
        <OverlayTrigger
            key={'bottom'}
            placement={'bottom'}
            overlay={
                <Tooltip id={`tooltip-bottom`}>Popular</Tooltip>}>
            <GlobalButtonStyled>
                <BsArrowUpRightCircle/>
            </GlobalButtonStyled>
        </OverlayTrigger>
        </ButtonsGroupStyled>
    );
};

export default PopularButton;
