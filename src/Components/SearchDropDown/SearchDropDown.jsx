import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import {SearchDropDownStyled} from "./SearchDropDown.styled";
import {Link} from "react-router-dom";
import {BsArrowUpRightCircle} from 'react-icons/bs';
import {IoIosLink} from "react-icons/io";
import useFetch from "../../Hooks/useFetch";
import axios from "../../API/axios";

const SearchDropDown = ({show}) => {

    // Fetch communities
    const [trendingPostList, error, loading, reload] = useFetch({
        axiosInstance: axios,
        method: "GET",
        //  /api/random-category/
        url: "http://localhost:5000/TrendingPosts",
        requestConfig: {
            headers: {
                "Content-Language": "en-US",
            },
        },
    });

    return (
        <SearchDropDownStyled show={show} rootCloseEvent={'click'} autoClose={true}>
            <Dropdown.Header>trending today</Dropdown.Header>
            {!loading && trendingPostList.map(recentPost => {
                return (
                    <>
                        <Dropdown.Item eventKey={recentPost.id} disabled={false}>
                            <Link className={'content'}>
                                <div>
                                    <div>
                                        <div className={'header-name'}>
                                            <span className={'arrow'}><BsArrowUpRightCircle/></span>
                                            {recentPost.title}
                                        </div>
                                        <div className={'description'}>
                                            {recentPost.description}
                                        </div>
                                    </div>
                                    <footer>
                                        <img
                                            src={recentPost.cover}
                                            alt={'img-category'}/>
                                        <span>r/{recentPost.category} and more</span>
                                    </footer>
                                </div>
                                <aside>
                                    <div className={'link-side'}>
                                        <div>
                                            <span> <IoIosLink/></span>
                                        </div>
                                    </div>
                                </aside>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Divider/>
                    </>
                )

            })}
        </SearchDropDownStyled>
    );
};

export default SearchDropDown;