import { ContainerPosts, StyledDropdown } from "./Posts.styled";
import Dropdown from "react-bootstrap/Dropdown";
import PostsList from "../../Components/Posts/PostsList";
import TopCommunities from "../../Components/CommunityCard/TopCommunities";
import CreateCommunity from "../../Components/CreateCommunity/CreateCommunity";
import People from "../../Components/People/People";
import { useState, useContext } from "react";
import SafeContext from "Features/Search/Contexts/SafeSearchContext/Safe-context";
import SearchContext from "Features/Search/Contexts/SearchWordContext/Search-context";
import { CommunityCard } from "Features/Subreddit";
import { SubRedditIDProvider } from "Features/Subreddit/Contexts/SubRedditIDProvider";
import { SubRedditProvider } from "Features/Subreddit/Contexts/SubRedditProvider";
import { IsModeratorProvider } from "Features/Subreddit/Contexts/IsModeratorProvider";
import { IsBannedProvider } from "Features/Subreddit/Contexts/IsBannedProvider";
import { IsMutedProvider } from "Features/Subreddit/Contexts/IsMutedProvider";
import SetCommunityCard from "Features/Search/Components/SetCommunityCard/SetCommunityCard";
/**
 * Component that contains the Posts Page included the 2 drop downs and posts list component and the People Card Component ,Community Card Component.
 *
 * @Component
 * @param {object} PostList - contain all the posts
 * @param {object} PeopleList - contain all the People
 * @param {object} CommunityList - contain all the Communities
 * @param {object} PeopleFollow - contain all the People that user following
 * @param {object} CommunitiesSub2 - contain all the Communities that user subscribe
 * @param {function} OnSort - Fuction delivered the sort type to the search component
 *
 * @returns {React.Component}
 */
const Posts = ({
  PostList,
  PeopleList,
  CommunityList,
  PeopleFollow,
  CommunitiesSub2,
  OnSort,
}) => {
  console.log(PeopleFollow, "PostList");
  /**
   * State That Hndle Sorting Operation
   */
  const [Sort, setSort] = useState("Relevance");
  const [SortName, setSortName] = useState("Sort");

  /**
   * State That Hndle Sorting on time Operation
   */
  const [Time, setTime] = useState("All time");
  const [TimeName, setTimeName] = useState("time");
  const ctx = useContext(SearchContext);
  // const ctx = useContext(SafeContext);
  // console.log(ctx.safe);
  // if (PostList) {
  // const filteredPostList = PostList.results.filter((post) => {
  //   return post.nsfw === ctx.safe;
  // });
  return (
    <>
      {/* fgdgddg */}
      <SubRedditProvider>
        <SubRedditIDProvider>
          <IsModeratorProvider>
            <IsBannedProvider>
              <IsMutedProvider>
                <ContainerPosts>
                  <div className="subnav">
                    <div className="sort">
                      <StyledDropdown
                        id="dropdown-basic-button"
                        title={SortName}
                        variant="transparent"
                        className="sort"
                      >
                        <Dropdown.Item
                          href="#"
                          onClick={() => {
                            setSort("Relevance");
                            OnSort("Relevance");
                            setSortName("Relevance");
                            ctx.SortHandler("relevance");
                          }}
                        >
                          Relevance
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setSort("Hot");
                            OnSort("hot");
                            setSortName("Hot");
                            ctx.SortHandler("hot");
                          }}
                        >
                          Hot
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#"
                          onClick={() => {
                            setSort("Top");
                            OnSort("top");
                            setSortName("Top");
                            ctx.SortHandler("top");
                          }}
                        >
                          Top
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#"
                          onClick={() => {
                            setSort("New");
                            OnSort("new");
                            setSortName("New");
                            ctx.SortHandler("new");
                          }}
                        >
                          New
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#"
                          onClick={() => {
                            setSort("Most comments");
                            OnSort("most Comments");
                            setSortName("Most Comments");
                            ctx.SortHandler("most Comments");
                          }}
                        >
                          Most comments
                        </Dropdown.Item>
                      </StyledDropdown>
                    </div>
                    {Sort !== "Hot" && Sort !== "New" && (
                      <div className="time">
                        <StyledDropdown
                          id="dropdown-basic-button"
                          title={TimeName}
                          variant="transparent"
                          className="time"
                        >
                          <Dropdown.Item
                            href="#"
                            onClick={() => {
                              setTimeName("All time");
                            }}
                          >
                            All time
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#"
                            onClick={() => {
                              setTimeName("Past Year");
                            }}
                          >
                            Past Year
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#"
                            onClick={() => {
                              setTimeName("Past Month");
                            }}
                          >
                            Past Month
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#"
                            onClick={() => {
                              setTimeName("Past week");
                            }}
                          >
                            Past week
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#"
                            onClick={() => {
                              setTimeName("Past 24 Hours");
                            }}
                          >
                            Most 24 Hours
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#"
                            onClick={() => {
                              setTimeName("Past Hour");
                            }}
                          >
                            Most Hour
                          </Dropdown.Item>
                        </StyledDropdown>
                      </div>
                    )}
                  </div>
                  {/* {PostList.results && ( */}
                  <div className="x">
                    <PostsList type={Sort} PostList={PostList} />
                    <div className="side-cards">
                      {!ctx.isSubreddit && (
                        <>
                          <TopCommunities
                            CommunityList={CommunityList}
                            CommunitiesSub2={CommunitiesSub2}
                          />
                          <People
                            PeopleList={PeopleList}
                            PeopleFollow={PeopleFollow}
                          />
                          <CreateCommunity />
                        </>
                      )}
                      {ctx.isSubreddit && ctx.community && (
                        <SetCommunityCard comm={ctx.community}>
                          <CommunityCard />
                        </SetCommunityCard>
                      )}
                    </div>
                  </div>
                </ContainerPosts>
              </IsMutedProvider>
            </IsBannedProvider>
          </IsModeratorProvider>
        </SubRedditIDProvider>
      </SubRedditProvider>
    </>
  );
};

export default Posts;
