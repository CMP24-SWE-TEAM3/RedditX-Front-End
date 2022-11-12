import React from 'react';
import {AdvertiseButtonStyled} from "./AdvertiseButton.styled";
import {HiOutlineSpeakerphone} from "react-icons/hi";

/**
 * Component that shows  advertisements
 * @returns {React.Component}
 *
 */
const AdvertiseButton = () => {
    return (
        <AdvertiseButtonStyled>
            <span><HiOutlineSpeakerphone/></span>
            {/*<span>Advertise</span>*/}
        </AdvertiseButtonStyled>
    );
};

export default AdvertiseButton;
