import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import { SearchDropDownStyled } from "./SearchDropDown.styled";
import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { IoIosLink } from "react-icons/io";
import trendingSearch from "Services/trendingSearch";
import useFetchFunction from "Hooks/useFetchFunction";
import { useEffect } from "react";

/**
 * Component that displays a dropdown with a search bar inputForm
 * @param show
 * @return {React.Component}
 */
const SearchDropDown = ({ show }) => {
  // Fetch trending posts
  const [trendingPostList, error, loading, dataFetch] = useFetchFunction();
  useEffect(() => {
    trendingSearch(dataFetch);
  }, []);

  return (
    <SearchDropDownStyled show={show} autoClose={"outside"}>
      <Dropdown.Header>trending today</Dropdown.Header>
      {!loading &&
        trendingPostList.map((recentPost) => {
          return (
            <>
              <Dropdown.Item eventKey={recentPost.id} disabled={false}>
                <Link className={"content"}>
                  <div>
                    <div>
                      <div className={"header-name"}>
                        <span className={"arrow"}>
                          <BsArrowUpRightCircle />
                        </span>
                        {recentPost.title}
                      </div>
                      <div className={"description"}>
                        {recentPost.description}
                      </div>
                    </div>
                    <footer>
                      <img src={recentPost.cover} alt={"img-category"} />
                      <span>r/{recentPost.category} and more</span>
                    </footer>
                  </div>
                  <aside>
                    <div className={"link-side"}>
                      <div>
                        <span>
                          {" "}
                          <IoIosLink />
                        </span>
                      </div>
                    </div>
                  </aside>
                </Link>
              </Dropdown.Item>
              <Dropdown.Divider />
            </>
          );
        })}
    </SearchDropDownStyled>
  );
};

export default SearchDropDown;
