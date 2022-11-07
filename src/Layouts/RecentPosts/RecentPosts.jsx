import React from 'react';
import {Container} from "./RecentPosts.styled";
import imagePost from "Assets/Images/cats.png";
import db from "Data/db.json";
import {Link, RouteProps} from "react-router-dom";

/**
 * Component that displays a list of recent posts from homepage
 *
 * @return {React.Component}
 */
const RecentPosts = () => {
    return (
        <Container>
            <div>
                <div className="head">
                    <div>Recent Posts</div>
                </div>
                {db.RecentPosts.map(recentPost => {
                    return (
                        <div className="content" key={recentPost.id}>
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
                                    {recentPost.description}
                                </p>
                                <div className='details'>
                                    <div>
                        <span>
                            {recentPost.points} points
                        </span>
                                        <span className={'dots'}>
                                {recentPost.comments} comments
                            </span>
                                        <span className={'dots'}>
                                {recentPost.hours}h
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button className={'but'}>
                Clear
            </button>
        </Container>
    );
};

export default RecentPosts;
