import React from 'react';
import {Container} from "./CreatePost.styled";
import Post  from "Components/Post/Post";
import ImageButton   from "Components/ImageButton/ImageButton";
import LinkButton from "Components/LinkButton/LinkButton";
import ProfilePostButton from "Components/ProfilePostButton/ProfilePostButton";
const CreatePost = () => {
    return (
        <Container>
            <ProfilePostButton/>
            <Post/>
            <ImageButton/>
            <LinkButton/>
        </Container>
    );
};

export default CreatePost;
