import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import {ButtonStyled} from './ScrollButton.styled';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        // console.log(scrolled, visible)
        if (scrolled > 200) {
            setVisible(true)
        } else if (scrolled <= 200) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <ButtonStyled onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>Back to Top</ButtonStyled>

    );
}

export default ScrollButton;
