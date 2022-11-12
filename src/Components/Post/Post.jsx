// imports
import React from 'react';
import {PostStyled} from "./Post.styled";

/**
 *  Component that displays a post with the specified input placeholder
 * @returns {React.Component}
 */

const Post = () => {
    const Boom = () => {
        alert('re-direct to Create Post Page');
    }
    return (
        <PostStyled id={'create-post-container'} onClick={Boom} type="post" placeholder="Create Post"/>

    );
};

export default Post;
