// imports
import React from 'react';
import {MdOutlineWbSunny} from 'react-icons/md';
import {Button} from "./NewButton.styled";

/**
 * Component that directs to New posts
 *
 * @returns {React.Component}
 */
const NewButton = () => {
    return (
        <Button>
            <span className={'icon'}> <MdOutlineWbSunny/></span>
            <span className='word'>New</span>
        </Button>
    );
};

export default NewButton;
