import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import {
  SearchDropDownStyled,
  Description,
  HeaderName,
  Arrow,
  Footer,
  AsideContainer,
  LinkSide,
} from "./SearchDropDown.styled";
import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { IoIosLink } from "react-icons/io";
import trendingSearch from "Services/trendingSearch";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useEffect } from "react";

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
    trendingSearch(fetchData, auth);
  }, []);

  return (
    <SearchDropDownStyled show={true} autoClose={"outside"}>
      <Dropdown.Header>trending today</Dropdown.Header>
      {!loading &&
        trendingPostList.map((recentPost) => {
          return (
            <>
              <Dropdown.Item eventKey={recentPost.id} disabled={false}>
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
                      <img src={recentPost.cover} alt={"img-category"} />
                      <span>r/{recentPost.category} and more</span>
                    </Footer>
                  </div>
                  <AsideContainer>
                    <LinkSide>
                      <div>
                        <span>
                          {" "}
                          <IoIosLink />
                        </span>
                      </div>
                    </LinkSide>
                  </AsideContainer>
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
