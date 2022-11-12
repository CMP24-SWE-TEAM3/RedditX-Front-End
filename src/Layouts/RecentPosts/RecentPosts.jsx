import React, {useState} from 'react';
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
        url: "/RecentPosts/",
        requestConfig: {
            headers: {
                "Content-Language": "en-US",
            },
        },
    });
    /**
     * state to handle show and delete of recent posts
     */
    const [showRecentPosts, setShowRecentPosts] = useState(true);
    const deleteRecentPosts = () => {
        //TODO: handle refreshing recent posts after reloading
        recentPostList.splice(0, recentPostList.length);
        setShowRecentPosts(false);
    }
    return (
        <>
            { showRecentPosts&&<Container id={'recent-post-container'}>
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
                    <button id={'recent-post-button'} className={'but'} onClick={deleteRecentPosts}>
                        Clear
                    </button>
                </Container>}
        </>
    );
};

export default RecentPosts;
