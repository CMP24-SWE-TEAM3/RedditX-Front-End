// imports
import React from 'react';
import {Button} from "./Top.styled";
import {AiOutlineToTop} from 'react-icons/ai';

/**
 * Component that directs to a top page after user clicks on  a button
 *
 * @returns {React.Component}
 */
const TopButton = () => {
    return (
        <Button>
            <span> <AiOutlineToTop/></span>
            <span className={'word'}>Top</span>
        </Button>
    );
};

export default TopButton;
