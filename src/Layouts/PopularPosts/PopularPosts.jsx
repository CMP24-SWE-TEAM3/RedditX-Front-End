// imports
import React from "react";
import HotButton from "Components/HotButton/HotButton";
import { Container } from "./PopularPosts.styled";
import NewButton from "Components/NewButton/NewButton";
import TopButton from "Components/TopButton/TopButton";
import DotButton from "Components/DotButton/DotButton";
import ChooseDate from "Components/ChooseDate/ChooseDate";
import BestButton from "Components/BestButton/BestButton";
import { useLocation } from "react-router-dom";

/**
 * Component that displays a list of posts from a category list view
 * @returns {React.Component}
 */
const PopularPost = () => {
  const location = useLocation();
  const url = location.pathname;
  const top = url.split("/")[1];
  return (
    <Container>
      <BestButton top={top} />
      <HotButton />
      <NewButton />
      <TopButton />
      {top && top === "top" && <ChooseDate />}
      <DotButton />
    </Container>
  );
};

export default PopularPost;
