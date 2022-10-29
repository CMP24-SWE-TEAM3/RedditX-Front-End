import React from 'react';
import {MdOutlineWbSunny} from 'react-icons/md';
import {Button} from "./NewButton.styled";

const NewButton = () => {
    return (
        <Button>
            <span className={'icon'}> <MdOutlineWbSunny/></span>
            <span className='word'>New</span>
        </Button>
    );
};

export default NewButton;
