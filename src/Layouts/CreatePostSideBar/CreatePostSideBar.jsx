import React, {useEffect, useRef, useState} from 'react';
import {Container} from "./CreatePostSideBar.styled";
import reddit from 'Assets/reddit.png'
import ModalCommunity from 'Components/Modal/Modal';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {BsFillPersonFill} from 'react-icons/bs';
import {HiLockClosed} from 'react-icons/hi';
import {VscEye} from 'react-icons/vsc';

/**
 * Component that displays a create post and community button on sidebar.
 * @returns {Component.React}
 */
const CreatePostSideBar = () => {
    const [show, setShow] = useState(false);
    useEffect(() => console.log('Open Model'), [show]);
    return (
        <>
            <Container>
                <div className={'content'}>
                <div className={'cover'}/>

                <div className={'home'}>
                    <img src={reddit} className={'logo'}/>
                    <div className={'block-home'}>
                    <span className={'word'}>
                    Home
                </span>
                    </div>
                </div>
                <div className={'out-fav'}>
                    <div className={'fav-com'}>
                        Your personal Reddit frontpage. Come here to check in with your favorite communities.
                    </div>
                </div>
                <hr/>
                <div className={'buts'}>
                    <button className={'sub-but1'}>Create Post</button>
                    <button onClick={() => setShow(true)} className={'sub-but2'}>Create Community</button>
                </div>
                </div>
            </Container>
            {<ModalCommunity show={show} close={() => setShow(false)}/>}
        </>
    );
};

export default CreatePostSideBar;
