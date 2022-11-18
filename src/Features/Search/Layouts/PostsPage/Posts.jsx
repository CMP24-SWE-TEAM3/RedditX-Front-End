import { ContainerPosts, StyledDropdown } from "./Posts.styled";
import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import PostsList from "../../Components/Posts/PostsList";
import TopCommunities from "../../Components/CommunityCard/TopCommunities";
import CreateCommunity from "../../Components/CreateCommunity/CreateCommunity";
// import { PeopleContainer } from "../../Components/People/People.styled";
import People from "../../Components/People/People";
import { useState } from "react";
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
  /**
   * State That Hndle Sorting Operation
   */
  const [Sort, setSort] = useState("Relevance");
  /**
   * State That Hndle Sorting on time Operation
   */
  const [Time, setTime] = useState("All time");
  if (PostList) {
    return (
      <>
        <ContainerPosts>
          <div className="subnav">
            <div className="sort">
              <StyledDropdown
                id="dropdown-basic-button"
                title="Sort"
                variant="transparent"
                className="sort"
              >
                <Dropdown.Item
                  href="#"
                  onClick={() => {
                    setSort("Relevance");
                    OnSort("Relevance");
                  }}
                >
                  Relevance
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSort("Hot");
                    OnSort("Hot");
                  }}
                >
                  Hot
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => {
                    setSort("Top");
                    OnSort("Top");
                  }}
                >
                  Top
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => {
                    setSort("New");
                    OnSort("New");
                  }}
                >
                  New
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={() => {
                    setSort("Most comments");
                    OnSort("Most Comments");
                  }}
                >
                  Most comments
                </Dropdown.Item>
              </StyledDropdown>
            </div>
            <div className="time">
              <StyledDropdown
                id="dropdown-basic-button"
                title="time"
                variant="transparent"
                className="time"
              >
                <Dropdown.Item href="#">All time</Dropdown.Item>
                <Dropdown.Item href="#">Past Year</Dropdown.Item>
                <Dropdown.Item href="#">Past Mounth</Dropdown.Item>
                <Dropdown.Item href="#">Past week</Dropdown.Item>
                <Dropdown.Item href="#">Most 24 Hours</Dropdown.Item>
                <Dropdown.Item href="#">Most Hour</Dropdown.Item>
              </StyledDropdown>
            </div>
          </div>
          <div className="x">
            <PostsList type={Sort} PostList={PostList} />
            <div className="side-cards">
              <TopCommunities
                CommunityList={CommunityList}
                CommunitiesSub2={CommunitiesSub2}
              />
              <People PeopleList={PeopleList} PeopleFollow={PeopleFollow} />
              <CreateCommunity />
            </div>
          </div>
        </ContainerPosts>
      </>
    );
  }
};

export default Posts;
