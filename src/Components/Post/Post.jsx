import React from 'react';
import {PostStyled} from "./Post.styled";


const Post = () => {
    const Boom = () => {
        alert('re-direct to Create Post Page');
    }
    return (
        <PostStyled onClick={Boom} type="post" placeholder="Create Post"/>

    );
};

export default Post;
