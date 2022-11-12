// imports
import React, {useState} from 'react';
import {ButtonStyled} from './ScrollButton.styled';

/**
 *  Component  which has been showed after 200 px from top page to get back to new feeds
 * @returns {React.Component}
 */
const ScrollButton = () => {

    /**
     * state for the scroll button state to make sure is visible when scrolling or not
     */
    const [visible, setVisible] = useState(false)

    /**
     * function to be called when the pixel position changes and get called by event listeners
     */
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
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
        <ButtonStyled id={'back-to-top-button'} onClick={scrollToTop} show={visible}>Back to Top</ButtonStyled>

    );
}

export default ScrollButton;
