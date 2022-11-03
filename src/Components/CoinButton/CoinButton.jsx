import React from 'react';
import {RiCoinsLine} from 'react-icons/ri'
import {GlobalButtonStyled} from 'Components/Global/GlobalButton.styled';

const CoinButton = (props) => {
    return (
        <GlobalButtonStyled onClick={props.onshow}>
            <RiCoinsLine/>
        </GlobalButtonStyled>
    );
};
//#4f5250
export default CoinButton;
