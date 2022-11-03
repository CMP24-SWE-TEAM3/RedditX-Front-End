// imports
import React, {useState} from 'react';
import {ButtonStyled} from './ScrollButton.styled';

/**
 *  Component  which has been showed after 200 px from top page to get back to new feeds
 * @returns {React.Component}
 */
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
