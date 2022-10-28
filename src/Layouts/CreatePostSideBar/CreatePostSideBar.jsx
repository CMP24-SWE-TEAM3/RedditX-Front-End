import React, {useEffect, useRef, useState} from 'react';
import {ModalContainer, Container, ModalStyled} from "./CreatePostSideBar.styled";
import reddit from 'Assets/reddit.png'
import ModalCommunity from 'Components/Modal/Modal';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {BsFillPersonFill} from 'react-icons/bs';
import {HiLockClosed} from 'react-icons/hi';
import {VscEye} from 'react-icons/vsc';

const CreatePostSideBar = () => {
    const [show, setShow] = useState(false);
    useEffect(() => console.log('Open Model'), [show]);
    return (
        <>
            <Container>
                <div className={'cover'}/>
                <div className={'home'}>
                    <img src={reddit} className={'logo'}/>
                    <span className={'word'}>
                    Home
                </span>
                </div>
                <div className={'fav-com'}>
                    Your personal Reddit frontpage. Come here to check in with your favorite communities.
                </div>
                <hr/>
                <button className={'sub-but1'}>Create Post</button>
                <button onClick={() => setShow(true)} className={'sub-but2'}>Create Community</button>
            </Container>
            {<ModalCommunity show={show} close={() => setShow(false)}/>}
        </>
    );
};

export default CreatePostSideBar;
