// imports
import React from 'react';
import {Button} from "./HotButton.styled";

/**
 * Component that displays a list of posts on the homepage categorized as hot posts
 *
 * @returns {React.Component}
 */
const HotButton = ({ico,name}) => {
    return (
        <div>
            <Button>
                <span>{ico} </span>
                <span className="word">
                    {name}
                </span>
            </Button>

        </div>
    );
};

export default HotButton;
