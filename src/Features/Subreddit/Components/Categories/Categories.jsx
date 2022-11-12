import React, { useEffect, useState } from "react";

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
export default function Categories() {
  let CategoryData = [
    { title: "All Communities", url: "#", id: 1 },
    { title: "Near You", url: "#", id: 2 },
    { title: "Gaming", url: "#", id: 3 },
    { title: "Sports", url: "#", id: 4 },
    { title: "News", url: "#", id: 5 },
    { title: "Tv", url: "#", id: 6 },
    { title: "Books", url: "#", id: 7 },
  ];
  const [currentCategory, setCurrentCategory] = useState([]);

  useEffect(() => {
    setCurrentCategory(CategoryData);
  }, []);

  function handleChange(id) {}

  let CatergoryElement = currentCategory.map((element) => {
    return (
      <li key = {element.id}>
        <Category
          to={`/category/${element.title.replace(/\s/g, '')}`}
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
        <ShowMoreBtn>See More</ShowMoreBtn>
      </div>
    </AllCategories>
  );
}
