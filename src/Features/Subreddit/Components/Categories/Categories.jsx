import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "Features/Subreddit/Services/DataContext";

import {
  AllCategories,
  CategoryH3,
  CategoryOl,
  CategoryHeader,
  ShowMoreBtn,
  Category,
} from "./Categories.styled";

/**
 * Component that contains the categories [left section] of the community leaderboard page
 * @Component
 * @returns {React.Component}
 */
 const Categories = () => {
  const [showMore, setShowMore] = useState(false);
  const { category, setCategory } = useContext(DataContext);
  const [categoryData, setCategoryData] = useState(category);
  useEffect(() => {
    if (showMore === false) {
      setCategoryData((e) => e.filter((item) => item.id < 10));
    } else {
      setCategoryData(category);
    }
  }, [showMore]);

  function handleChange(id) {}
  function seeMoreBtn() {
    setShowMore((e) => !e);
  }

  let CatergoryElement = categoryData.map((element) => {
    return (
      <li key={element.id}>
        <Category
          className={"cat"}
          to={`/category/${element.title}`}
          onClick={() => handleChange(element.id)}
        >
          {element.title}
        </Category>
      </li>
    );
  });

  return (
    <AllCategories>
      <CategoryHeader>
        <CategoryH3>Categories</CategoryH3>
      </CategoryHeader>
      <div className="categories">
        <CategoryOl>{CatergoryElement}</CategoryOl>
        <ShowMoreBtn onClick={seeMoreBtn}>
          {showMore ? "See Less" : "See More"}
        </ShowMoreBtn>
      </div>
    </AllCategories>
  );
}
export default Categories;
