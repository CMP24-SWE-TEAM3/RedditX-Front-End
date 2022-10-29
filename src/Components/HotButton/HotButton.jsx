import React from 'react';
import {Button} from "./HotButton.styled";
import {AiOutlineFire} from 'react-icons/ai';

const HotButton = () => {
    return (
        <div>
            <Button>
                <span><AiOutlineFire/> </span>
                <span className="word">
                    Hot
                </span>
            </Button>

        </div>
    );
};

export default HotButton;
