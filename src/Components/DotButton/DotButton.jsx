// imports
import React from 'react';
import {Button} from "./DotButton.styled";
import {BsThreeDots} from "react-icons/bs";

/**
 * Component that displays the button with dots
 *
 * @returns {React.Component}
 *
 */
const DotButton = () => {
    return (
        <Button>
            <span><BsThreeDots/></span>
        </Button>
    );
};

export default DotButton;
