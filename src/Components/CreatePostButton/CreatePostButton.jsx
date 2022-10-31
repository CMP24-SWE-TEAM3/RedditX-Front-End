import React from 'react';
import {HiOutlinePlus} from 'react-icons/hi';
import {GlobalButtonStyled} from "Components/Global/GlobalButton.styled";

const CreatePostButton = (props) => {
    return (
        <GlobalButtonStyled onClick={props.onshow}>
            <HiOutlinePlus/>
        </GlobalButtonStyled>
    );
};

export default CreatePostButton;
