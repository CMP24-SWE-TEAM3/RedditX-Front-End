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
 * @param {Fuction} OnSort - the function that use to lift the state of the sort up
 * @returns {React.Component}
 */
const Posts = ({ OnSort }) => {
  /**
   * State That Hndle Sorting Operation
   */
  const [Sort, setSort] = useState("Relevance");
  /**
   * State That Hndle Sorting on time Operation
   */
  const [Time, setTime] = useState("All time");
  // console.log(Sort);
  return (
    <>
      <ContainerPosts>
        <div className="subnav">
          <div className="sort">
            <StyledDropdown
              id="dropdown-basic-button"
              title="Sort"
              variant="transparent"
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
                  OnSort("Most comments");
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
            >
              <Dropdown.Item href="#/action-1">All time</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Past Year</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Past Mounth</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Past week</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Most 24 Hours</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Most Hour</Dropdown.Item>
            </StyledDropdown>
          </div>
        </div>
        <div className="x">
          <PostsList type={Sort} />
          <div className="side-cards">
            <TopCommunities />
            <People />
            <CreateCommunity />
          </div>
        </div>
      </ContainerPosts>
    </>
  );
};

export default Posts;
