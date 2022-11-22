import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import { StyledDropdown } from "./CategoryDropDown.styled";

/**
 * Component that contains Categories but in responsive form.
 *
 * @Component
 * @returns {React.Component}
 */
const CategoryDropDown = () => {
  const pathname = window.location.pathname;
  const firstTwo = pathname.substring(1);
  const secondTwo = firstTwo.charAt(0).toUpperCase() + firstTwo.slice(1);
  const [Title, setTitle] = useState(secondTwo);

  let CategoryData = [
    { title: "All Communities", url: "#", id: 1 },
    { title: "Near You", url: "#", id: 2 },
    { title: "Gaming", url: "#", id: 3 },
    { title: "Sports", url: "#", id: 4 },
    { title: "News", url: "#", id: 5 },
    { title: "Tv", url: "#", id: 6 },
    { title: "Books", url: "#", id: 7 },
  ];



  let CatergoryElement = CategoryData.map((element) => {
    return (

        <Dropdown.Item
          key = {element.id.toString()}
          to={`/category/${element.title}`}
          onClick={() => setTitle(element.title)}
          as={NavLink}
        >
            {element.title}
        </Dropdown.Item>
    );
  });

  return (
    <StyledDropdown
      id="dropdown-basic-button"
      title={"Categories"}
      variant={"transparent"}
      size="md"
    >
    {CatergoryElement}
    </StyledDropdown>
  );
};

export default CategoryDropDown;