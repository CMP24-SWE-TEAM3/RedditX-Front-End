import React from 'react';
import {BsArrowUpRightCircle} from 'react-icons/bs'
import { GlobalButtonStyled} from 'Components/Global/GlobalButton.styled'
const PopularButton = (props) => {
    return (
        <GlobalButtonStyled onClick={props.onshow}>
            <BsArrowUpRightCircle/>
        </GlobalButtonStyled>
    );
};

export default PopularButton;
