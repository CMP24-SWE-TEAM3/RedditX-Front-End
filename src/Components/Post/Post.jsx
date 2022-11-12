// imports
import React from 'react';
import {PostStyled} from "./Post.styled";
import { useNavigate } from "react-router-dom";/**
/**
 *  Component that displays a post with the specified input placeholder
 * @returns {React.Component}
 */

const Post = () => {
        const navigate = useNavigate();
    return (
        <PostStyled id={'create-post-container'} onFocus={()=>(navigate("/submit"))} type="post" placeholder="Create Post"/>

    );
};

export default Post;
