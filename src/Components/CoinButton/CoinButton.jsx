// imports
import React from 'react';
import {RiCoinsLine} from 'react-icons/ri'
import {ButtonsGroupStyled, GlobalButtonStyled} from 'Components/GlobalButton/GlobalButton.styled';
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
        <ButtonsGroupStyled>
            <OverlayTrigger
                key={'bottom'}
                placement={'bottom'}
                overlay={
                    <Tooltip id={`tooltip-bottom`}>Coin</Tooltip>}>
                <GlobalButtonStyled onClick={props.onshow}>
                    <RiCoinsLine/>
                </GlobalButtonStyled>
            </OverlayTrigger>
        </ButtonsGroupStyled>
    );
};
//#4f5250
export default CoinButton;
