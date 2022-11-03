// imports
import React from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

/**
 * Component that toggles to on and off when the user clicks on a button
 *
 * @param bool flip on or off
 *
 * @returns {React.Component}
 */
const SwitchButton = ({bool}) => {
    return (
        <BootstrapSwitchButton
            checked={bool}
            size='xs'
            onChange={(checked: boolean) => {
                this.setState({isUserAdmin: checked})
            }}
        />
    );
};

export default SwitchButton;


