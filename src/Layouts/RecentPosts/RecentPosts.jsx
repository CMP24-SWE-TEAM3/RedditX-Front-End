import React from 'react';
import {Container} from "./RecentPosts.styled";
import imagePost from "Assets/Images/cats.png";

const RecentPosts = () => {
    return (
        <Container>
            <div>
                <div className="header"><h2>Recent Posts</h2></div>
                <div className="content">
                    <div className="cover">
                        <div className={'child-1'}>
                            <div className={'post-img'}>
                                <img src={imagePost}/>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <p>
                            this place needs more cats
                        </p>
                        <div className='details'>
                        <span>
                            57 points
                        </span>
                            <span className={'dots'}>
                                10 comments
                            </span>
                            <span className={'dots'}>
                                10h
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <button className={'but'}>
                Clear
            </button>

        </Container>
    );
};

export default RecentPosts;
