// imports
import React from 'react';
import {BsArrowUpRightCircle} from 'react-icons/bs'
import {GlobalButtonStyled} from 'Components/Global/GlobalButton.styled'

/**
 * Component that directs to popular page
 * @returns {React.Component}
 */
const PopularButton = () => {
    return (
        <GlobalButtonStyled>
            <BsArrowUpRightCircle/>
        </GlobalButtonStyled>
    );
};

export default PopularButton;
