// imports
import React from 'react';
import {Button} from "./HotButton.styled";
import {RiRocketLine} from 'react-icons/ri';

/**
 * Component that displays a list of posts on the homepage categorized as hot posts
 *
 * @returns {React.Component}
 */
const HotButton = () => {
    return (
        <div>
            <Button>
                <span><RiRocketLine/> </span>
                <span className="word">
                    Best
                </span>
            </Button>

        </div>
    );
};

export default HotButton;
