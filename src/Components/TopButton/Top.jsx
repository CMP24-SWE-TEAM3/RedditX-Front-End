import React from 'react';
import {Button} from "./Top.styled";
import {AiOutlineToTop} from 'react-icons/ai';

const TopButton = () => {
    return (
        <Button>
            <span > <AiOutlineToTop/></span>
            <span className={'word'}>Top</span>
        </Button>
    );
};

export default TopButton;
