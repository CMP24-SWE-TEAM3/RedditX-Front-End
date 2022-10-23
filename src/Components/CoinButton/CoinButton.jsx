import React from 'react';
import {RiCoinsLine} from 'react-icons/ri'
import {GlobalButtonStyled} from 'Components/GlobalButton/GlobalButton.styled';

const CoinButton = (props) => {
    return (
        <GlobalButtonStyled onClick={props.onshow}>
            <RiCoinsLine/>
        </GlobalButtonStyled>
    );
};

export default CoinButton;
