import React from 'react';
import {Button} from "./HotButton.styled";
import {AiOutlineFire} from 'react-icons/ai';
import {RiRocketLine} from 'react-icons/ri';
/**
 * Component that  Main Links component but in responsive form.
 *
 * @Component
 * @returns {HotButton}
 */
const HotButton = () => {
    return (
        <div>
            <Button>
                <span><RiRocketLine/> </span>
                <span className="word">
                    Hot
                </span>
            </Button>

        </div>
    );
};

export default HotButton;
