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
const SwitchButton = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
    };

    return (
        <label>
            <ReactSwitch
                onChange={handleChange}
                checked={checked} checkedIcon={false} uncheckedIcon={false} disabled={false} onColor={"#0095dd"}
            />
        </label>
    );
};


export default SwitchButton;


