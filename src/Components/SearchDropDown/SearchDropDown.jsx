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
  CommunitiesText,
  ImageContainer,
  SubText,
  CommunityContainer,
  Members,
  Container,
  FirstChild,
  SecondChild,
  Dot,
  DropMenuContainer,
} from "./SearchDropDown.styled";
import { Link } from "react-router-dom";
import { BASE_URL } from "API/axios";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { IoIosLink } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import trendingSearch from "Services/trendingSearch";
import data from "Data/db";
import useFetchFunction from "Hooks/useFetchFunction";
import { useContext } from "react";
import SearchContext from "Features/Search/Contexts/SearchWordContext/Search-context";
import { useAuth } from "Features/Authentication/Contexts/Authentication";

/**
 * Component that displays a dropdown with a search bar inputForm
 * @param show
 * @return {React.Component}
 */
const SearchDropDown = ({ showTrending }) => {
  // authorization user
  const auth = useAuth();

  // Fetch trending posts
  const [trendingPostList, error, loading, fetchData] = useFetchFunction();
  useEffect(() => {
    trendingSearch(fetchData, auth);
  }, []);

  return (
    <SearchDropDownStyled show={showTrending} autoClose={"outside"}>
      <Dropdown.Header>trending today</Dropdown.Header>
      {data.TrendingPosts.map((recentPost) => {
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

export { SearchDropDown };

const SearchBody = ({
  searchItemsCommunities,
  searchItemsPeople,
  avatars,
  cntAndIcon,
  setQuery,
  query,
  showResults,
  setShowResults,
}) => {
  const ctx = useContext(SearchContext);
  const handleSearch = (event, query) => {
    event.preventDefault();
    ctx.wordHandler(query);
    ctx.isSubredditHandler(true);
    ctx.communityHandler(query);
  };

  return (
    <>
      {(searchItemsCommunities.length > 0 || searchItemsPeople.length > 0) && (
        <DropMenuContainer show={showResults}>
          {searchItemsCommunities.length > 1 && (
            <Container
              onClick={() => {
                setShowResults(false);
                handleSearch(query);
                setQuery("");
              }}
            >
              <CommunitiesText>Communtities</CommunitiesText>
              {searchItemsCommunities.map((Community, index) => {
                if (index < 3) {
                  return (
                    <SubText to={`/subreddit/${Community}`}>
                      <ImageContainer>
                        <img
                          crossOrigin="anonymous"
                          src={`${BASE_URL}/subreddits/files/${cntAndIcon[index][1]}`}
                          alt=""
                        />
                      </ImageContainer>
                      <div>
                        <CommunityContainer>
                          r/{Community.substring(3)}
                        </CommunityContainer>
                        <Members>
                          <FirstChild>Community</FirstChild>
                          <Dot>
                            <BsDot size={22} />
                          </Dot>
                          <SecondChild>
                            {cntAndIcon[index][0]} members
                          </SecondChild>
                        </Members>
                      </div>
                    </SubText>
                  );
                }
              })}
            </Container>
          )}

          {searchItemsPeople.length > 0 && (
            <Container
              onClick={() => {
                setShowResults(false);
                handleSearch(query);
                setQuery("");
              }}
            >
              <CommunitiesText>People</CommunitiesText>
              {searchItemsPeople.map((searchItem, index) => {
                if (index < 3) {
                  return (
                    <SubText to={`/user/${searchItem}`}>
                      <ImageContainer>
                        <img
                          crossOrigin="anonymous"
                          src={`${BASE_URL}/users/files/${avatars[index]}`}
                          alt=""
                        />
                      </ImageContainer>
                      <div>
                        <CommunityContainer>
                          u/{searchItem.substring(3)}
                        </CommunityContainer>
                        <Members>
                          <FirstChild>User</FirstChild>
                          <Dot>
                            <BsDot size={22} />
                          </Dot>
                          <SecondChild>1 karma</SecondChild>
                        </Members>
                      </div>
                    </SubText>
                  );
                }
              })}
            </Container>
          )}
        </DropMenuContainer>
      )}
    </>
  );
};
export default SearchBody;
