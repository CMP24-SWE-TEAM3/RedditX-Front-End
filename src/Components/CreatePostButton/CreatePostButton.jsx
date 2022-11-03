// imports
import React from 'react';
import {HiOutlinePlus} from 'react-icons/hi';
import {GlobalButtonStyled} from "Components/Global/GlobalButton.styled";

/**
 * Component that displays the profile button
 *
 * @param props to test against properties
 *
 * @returns {React.Component}
 */
const CreatePostButton = (props) => {
    return (
        <GlobalButtonStyled onClick={props.onshow}>
            <HiOutlinePlus/>
        </GlobalButtonStyled>
    );
};

export default CreatePostButton;
