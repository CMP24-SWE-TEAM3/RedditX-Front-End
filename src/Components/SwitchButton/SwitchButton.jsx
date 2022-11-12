// imports
import React, {useState} from 'react';
import {ReactSwitch} from "./SwitchButton.styled";

/**
 * Component that toggles to on and off when the user clicks on a button
 *
 * @param bool flip on or off
 *
 * @returns {React.Component}
 */
const SwitchButton = ({toggle}) => {
    /**
     * state for toggle button  state
     */
    const [checked, setChecked] = useState(false);

    /**
     * function for toggle button state change event handler
     * @param nextChecked
     */
    const handleChange = nextChecked => {
        setChecked(nextChecked);
        toggle();
    };

    return (
        <label>
            <ReactSwitch
                onChange={handleChange}
                checked={checked} mode={checked}  checkedIcon={false} uncheckedIcon={false} disabled={false} onColor={"#0095dd"}
            />
        </label>
    );
};


export default SwitchButton;


