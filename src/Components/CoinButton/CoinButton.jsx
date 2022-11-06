// imports
import React from 'react';
import {RiCoinsLine} from 'react-icons/ri'
import {GlobalButtonStyled} from 'Components/Global/GlobalButton.styled';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

/**
 *  Component that displays amount of coins in balance in website
 *
 * @param props to test component properties
 *
 * @returns {React.Component}
 *
 */
const CoinButton = (props) => {
    return (
        <OverlayTrigger
            key={'bottom'}
            placement={'bottom'}
            overlay={
                <Tooltip id={`tooltip-bottom`}>Coin</Tooltip>}>
            <GlobalButtonStyled onClick={props.onshow}>
                <RiCoinsLine/>
            </GlobalButtonStyled>
        </OverlayTrigger>

    );
};
//#4f5250
export default CoinButton;
