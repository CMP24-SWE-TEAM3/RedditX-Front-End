import React from 'react';
import {Container} from "./CreatePostSideBar.styled";
import reddit from 'Assets/reddit.png'

const CreatePostSideBar = () => {
    return (
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
            <button className={'sub-but2'}>Create Community</button>
        </Container>
    );
};

export default CreatePostSideBar;
