// imports
import React from 'react';
import {Container} from "./Footer.styled";
import { Link } from 'react-router-dom';

/**
 * Component that has a languages of different countries , privacy polices and content policies
 *
 * @returns {React.Component}
 */
const Footer = () => {
    return (
        <Container>
            <div className={'content'}>
                <div className={'menu-1'}>
                    <div className={'sec'}>
                        <Link href={"https://www.redditinc.com/policies/user-agreement"}>User Agreement </Link>
                        <Link href={"https://www.redditinc.com/policies/privacy-policy"}>Privacy Policy</Link>
                    </div>
                    <div className={'sec'}>
                        <Link href={"https://www.redditinc.com/policies/user-agreement"}>Content Policy </Link>
                        <Link href={"https://www.redditinc.com/policies/privacy-policy"}>Moderator Code of Conduct</Link>
                    </div>
                </div>
                <div className={'menu-1'}>
                    <div className={'sec'}>
                        <Link href={"https://www.redditinc.com/policies/user-agreement"}>English </Link>
                        <Link href={"https://www.redditinc.com/policies/privacy-policy"}>Français</Link>
                        <Link href={"https://www.redditinc.com/policies/privacy-policy"}>Italiano</Link>
                    </div>
                    <div className={'sec'}>
                        <Link href={"https://www.redditinc.com/policies/privacy-policy"}>Deutsch</Link>
                        <Link href={"https://www.redditinc.com/policies/user-agreement"}>Español</Link>
                        <Link href={"https://www.redditinc.com/policies/privacy-policy"}>Português</Link>
                    </div>
                </div>
                <div className={'inc'}>
                    Reddit Inc © 2022. All rights reserved
                </div>
            </div>
        </Container>
    );
};

export default Footer;
