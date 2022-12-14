import React from "react";
import { AdvertiseButtonStyled } from "./AdvertiseButton.styled";
import { FcAdvertising } from "react-icons/fc";

/**
 * Component that shows  advertisements
 * @returns {React.Component}
 *
 */
const AdvertiseButton = () => {
  return (
    <AdvertiseButtonStyled>
      <span>
        <FcAdvertising size={18} />
      </span>
      {/*<span>Advertise</span>*/}
    </AdvertiseButtonStyled>
  );
};

export default AdvertiseButton;
