import React from 'react';
import {Button} from "./DotButton.styled";
import {BsThreeDots} from "react-icons/bs";

const DotButton = () => {
    return (
        <Button>
            <span><BsThreeDots/></span>
        </Button>
    );
};

export default DotButton;
