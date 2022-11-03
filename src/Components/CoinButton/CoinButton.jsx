// imports
import React from 'react';
import {RiCoinsLine} from 'react-icons/ri'
import {GlobalButtonStyled} from 'Components/Global/GlobalButton.styled';

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
        <GlobalButtonStyled onClick={props.onshow}>
            <RiCoinsLine/>
        </GlobalButtonStyled>
    );
};
//#4f5250
export default CoinButton;
