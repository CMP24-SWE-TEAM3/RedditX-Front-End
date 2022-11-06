// imports
import React from 'react';
import {BsArrowUpRightCircle} from 'react-icons/bs'
import {GlobalButtonStyled} from 'Components/Global/GlobalButton.styled'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

/**
 * Component that directs to popular page
 * @returns {React.Component}
 */
const PopularButton = () => {
    return (
        <OverlayTrigger
            key={'bottom'}
            placement={'bottom'}
            overlay={
                <Tooltip id={`tooltip-bottom`}>Popular</Tooltip>}>
            <GlobalButtonStyled>
                <BsArrowUpRightCircle/>
            </GlobalButtonStyled>
        </OverlayTrigger>
    );
};

export default PopularButton;
