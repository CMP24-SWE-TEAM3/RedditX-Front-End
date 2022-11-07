import React from 'react';
import {Container} from "./RecentPosts.styled";
import imagePost from "Assets/Images/cats.png";
import {Link,RouteProps} from "react-router-dom";

const RecentPosts = () => {
    return (
        <Container>
            <div>
                <div className="head">
                    <div>Recent Posts</div>
                </div>
                <div className="content">
                    <div className="cover">
                        <div className={'child-1'}>
                            <a href={"https://i.redd.it/kfjabyn5tdy91.png"}>
                                <div className={'post-img'}>
                                    <img src={imagePost}/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="description">
                        <p>
                            this place needs more cats
                        </p>
                        <div className='details'>
                            <div>
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
            </div>
            <button className={'but'}>
                Clear
            </button>
        </Container>
    );
};

export default RecentPosts;
