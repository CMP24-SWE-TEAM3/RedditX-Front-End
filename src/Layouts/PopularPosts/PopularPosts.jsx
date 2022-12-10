// imports
import React, { useState } from "react";
import HotButton from "Components/HotButton/HotButton";
import { Container } from "./PopularPosts.styled";
import NewButton from "Components/NewButton/NewButton";
import TopButton from "Components/TopButton/TopButton";
import DotButton from "Components/DotButton/DotButton";
import ChooseDate from "Components/ChooseDate/ChooseDate";
import BestButton from "Components/BestButton/BestButton";
import { Navigate, Route, Routes } from "react-router-dom";

/**
 * Component that displays a list of posts from a category list view
 * @returns {React.Component}
 */
const PopularPost = () => {
  const [showDate, setShowDate] = useState(true);
  const [clickedBtn, setClickedBtn] = useState("1");
  const handleClicked = (event) => {
    setClickedBtn(event.target.id);
    // console.log(event.target.id);
  };
  return (
    <Container>
      {/* <Routes>
        <Route path="/" element={<Navigate to={"/best"} />} />
        <Route path="/" element={<Navigate to={"/hot"} />} />
        <Route path="/" element={<Navigate to={"/New"} />} />
        <Route path="/" element={<Navigate to={"/Top"} />} />
      </Routes> */}
      <BestButton handleClicked={handleClicked} clickedBtn={clickedBtn} />
      <HotButton handleClicked={handleClicked} clickedBtn={clickedBtn} />
      <NewButton handleClicked={handleClicked} clickedBtn={clickedBtn} />
      <TopButton handleClicked={handleClicked} clickedBtn={clickedBtn} />
      {showDate && <ChooseDate />}
      <DotButton />
    </Container>
  );
};

export default PopularPost;
