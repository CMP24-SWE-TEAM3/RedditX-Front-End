import Dropdown from "react-bootstrap/Dropdown";
import React, { useEffect } from "react";
import {
  SearchDropDownStyled,
  HeaderName,
  Arrow,
  Description,
  Footer,
  Aside,
  LinkSide,
  Child,
  SubChild,
} from "./SearchDropDown.styled";
import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { IoIosLink } from "react-icons/io";
import trendingSearch from "Services/trendingSearch";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { BASE_URL } from "API/axios";

/**
 * Component that displays a dropdown with a search bar inputForm
 * @param show
 * @return {React.Component}
 */
const SearchDropDown = ({ show }) => {
  // authorization user
  const auth = useAuth();

  // Fetch trending posts
  const [trendingPostList, error, loading, fetchData] = useFetchFunction();
  useEffect(() => {
    console.log("trendingPostsss===>", trendingPostList);
    trendingSearch(fetchData, auth);
  }, []);

  return (
    <SearchDropDownStyled show={show} autoClose={"outside"}>
      <Dropdown.Header>trending today</Dropdown.Header>
      {trendingPostList &&
        trendingPostList.length !== 0 &&
        trendingPostList.map((recentPost) => {
          return (
            <>
              <Dropdown.Item eventKey={recentPost._id} disabled={false}>
                <Link>
                  <div>
                    <div>
                      <HeaderName>
                        <Arrow>
                          <BsArrowUpRightCircle />
                        </Arrow>
                        {recentPost.title}
                      </HeaderName>
                      <Description>{recentPost.description}</Description>
                    </div>
                    <Footer>
                      <img
                        crossOrigin="anonymous"
                        src={`${BASE_URL}/subreddits/files/${recentPost.srIcon}`}
                        alt={"img-category"}
                      />
                      <span>r/{recentPost.category} and more</span>
                    </Footer>
                  </div>
                  <Aside>
                    <LinkSide>
                      <Child>
                        <SubChild>
                          {" "}
                          <IoIosLink />
                        </SubChild>
                      </Child>
                    </LinkSide>
                  </Aside>
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
