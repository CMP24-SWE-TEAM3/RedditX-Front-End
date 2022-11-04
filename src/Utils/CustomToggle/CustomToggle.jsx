// imports
import React from "react";
import {AnchorToggle} from "./CustomToggle.styled";

/**
 * Function that helps dropdown functionality
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{readonly onClick?: *, readonly children?: *}> & React.RefAttributes<unknown>>}
 */
const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
    <AnchorToggle href="" ref={ref} onClick={(e) => {
        e.preventDefault();
        onClick(e)
    }}>{children}
    </AnchorToggle>
));
//&#x25bc;
//&#709;
export default CustomToggle;