import {
  AllCategories,
  CategoryH3,
  CategoryOl,
  Category,
  CategoryHeader,
  ShowMoreBtn,
} from "./Categories.styled";


/**
 * Component that contains the categories [left section] of the community leaderboard page
 *
 * @Component
 * @returns {React.Component}
 */
export default function Categories() {
  return (
    <AllCategories>
      <CategoryHeader>
        <CategoryH3>Categories</CategoryH3>
      </CategoryHeader>
      <div className="categories">
        <CategoryOl>
          <li>
            <Category href="#">All Communities</Category>
          </li>
          <li>
            <Category href="#">Near You</Category>
          </li>
          <li>
            <Category href="#">Gaming</Category>
          </li>
          <li>
            <Category href="#">Sports</Category>
          </li>
          <li>
            <Category href="#">News</Category>
          </li>
          <li>
            <Category href="#">TV</Category>
          </li>
        </CategoryOl>
        <ShowMoreBtn>See More</ShowMoreBtn>
      </div>
    </AllCategories>
  );
}
