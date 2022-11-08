// imports
import React from 'react';
import HotButton from "Components/HotButton/HotButton";
import {Container} from "./PopularPosts.styled";
import EveryWhereButton from "Components/EveryWhereButton/EveryWhereButton";
import NewButton from "Components/NewButton/NewButton";
import TopButton from "Components/TopButton/Top";
import DotButton from "Components/DotButton/DotButton";
import {HiFire} from "react-icons/hi";
import {RiRocketLine} from 'react-icons/ri';

/**
 * Component that displays a list of posts from a category list view
 * @returns {React.Component}
 */
const PopularPost = () => {
    return (
        <Container>
            <HotButton ico={<RiRocketLine/>} name={'Best'}/>
            <HotButton ico={<HiFire/>} name={'Hot'} />
            {/*<EveryWhereButton/>*/}
            <NewButton/>
            <TopButton/>
            <DotButton/>
            {/*<CategoryButton/>*/}
        </Container>
    );
};

export default PopularPost;
