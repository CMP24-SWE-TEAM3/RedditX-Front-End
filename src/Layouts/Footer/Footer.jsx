import React from 'react';
import {Container} from "./Footer.styled";
/**
 * Component that has a languages of different countries , privacy polices and content policies
 *
 * @returns {React.Component}
 */
const Footer = () => {
    return (
        <Container>
            <div className={'menu-1'}>
                <div className={'sec'}>
                    <a href={"https://www.redditinc.com/policies/user-agreement"}>User Agreement </a>
                    <a href={"https://www.redditinc.com/policies/privacy-policy"}>Privacy Policy</a>
                </div>
                <div className={'sec'}>
                    <a href={"https://www.redditinc.com/policies/user-agreement"}>Content Policy </a>
                    <a href={"https://www.redditinc.com/policies/privacy-policy"}>Moderator Code of Conduct</a>
                </div>
            </div>
            <div className={'menu-1'}>
                <div className={'sec'}>
                    <a href={"https://www.redditinc.com/policies/user-agreement"}>English </a>
                    <a href={"https://www.redditinc.com/policies/privacy-policy"}>Français</a>
                    <a href={"https://www.redditinc.com/policies/privacy-policy"}>Italiano</a>
                </div>
                <div className={'sec'}>
                    <a href={"https://www.redditinc.com/policies/privacy-policy"}>Deutsch</a>
                    <a href={"https://www.redditinc.com/policies/user-agreement"}>Español</a>
                    <a href={"https://www.redditinc.com/policies/privacy-policy"}>Português</a>
                </div>
            </div>
            <div className={'inc'}>
                Reddit Inc © 2022. All rights reserved
            </div>
        </Container>
    );
};

export default Footer;
