// imports
import React, { useState } from "react";
import HotButton from "Components/HotButton/HotButton";
import { Container } from "./PopularPosts.styled";
import NewButton from "Components/NewButton/NewButton";
import TopButton from "Components/TopButton/TopBtn";
import DotButton from "Components/DotButton/DotButton";
import { HiFire } from "react-icons/hi";
import { RiRocketLine } from "react-icons/ri";
import ChooseDate from "../../Components/ChooseDate/ChooseDate";

/**
 * Component that displays a list of posts from a category list view
 * @returns {React.Component}
 */
const PopularPost = () => {
  const [showDate, setShowDate] = useState(false);
  return (
    <Container>
      <HotButton ico={<RiRocketLine size={20} />} name={"Best"} />
      <HotButton ico={<HiFire size={21} />} name={"Hot"} />
      <NewButton />
      <TopButton setShowDate={setShowDate} />
      <ChooseDate />
      <DotButton />
      {/*<CategoryButton/>*/}
    </Container>
  );
};

export default PopularPost;
