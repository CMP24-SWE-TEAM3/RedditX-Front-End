import React from 'react';
import {Container} from "./RecentPosts.styled";
import imagePost from "Assets/Images/cats.png";
import {Link} from "react-router-dom";
import useFetch from "Hooks/useFetch";
import axios from "API/axios";

/**
 * Component that displays a list of recent posts from homepage
 *
 * @return {React.Component}
 */
const RecentPosts = () => {

    // Fetch Recent posts
    const [recentPostList, error, loading, reload] = useFetch({
        axiosInstance: axios,
        method: "GET",
        //  /api/random-category/
        url: "http://localhost:5000/RecentPosts",
        requestConfig: {
            headers: {
                "Content-Language": "en-US",
            },
        },
    });
    return (
        <Container>
            <div>
                <div className="head">
                    <div>Recent Posts</div>
                </div>
                {!loading && recentPostList.map(recentPost => {
                    return (
                        <div className="content" key={recentPost.id}>
                            <div className="cover">
                                <div className={'child-1'}>
                                    <Link href={"https://i.redd.it/kfjabyn5tdy91.png"}>
                                        <div className={'post-img'}>
                                            <img src={imagePost} alt={'recent post img'}/>
                                        </div>
                                    </Link>
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
