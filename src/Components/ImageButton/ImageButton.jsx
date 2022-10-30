import React from 'react';
import { ImageButtonStyled} from "./ImageButton.styled";
import {RiImage2Line} from "react-icons/ri";

const ImageButton = () => {
    return (
        <ImageButtonStyled>
            <i><RiImage2Line/> </i>
        </ImageButtonStyled>
    );
};

export default ImageButton;
