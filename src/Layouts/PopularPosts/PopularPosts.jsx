import React from 'react';
import HotButton from "Components/HotButton/HotButton";
import {Container} from "./PopularPosts.styled";
import EveryWhereButton from "Components/EveryWhereButton/EveryWhereButton";
import CategoryButton from "Components/CategoryButton/CategoryButton";
import NewButton from "Components/NewButton/NewButton";
import TopButton from "Components/TopButton/Top";
import DotButton from "Components/DotButton/DotButton";

const PopularPost = () => {
    return (
        <Container>
            <HotButton/>
            <EveryWhereButton/>
            <NewButton/>
            <TopButton/>
            <DotButton/>
            <CategoryButton/>
        </Container>
    );
};

export default PopularPost;
