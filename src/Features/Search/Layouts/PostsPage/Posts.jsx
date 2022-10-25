import { ContainerPosts, StyledDropdown } from "./Posts.styled";
import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import PostsList from "../../Components/Posts/PostsList";
import TopCommunities from "../../Components/CommunityCard/TopCommunities";
import CreateCommunity from "../../Components/CreateCommunity/CreateCommunity";
// import { PeopleContainer } from "../../Components/People/People.styled";
import People from "../../Components/People/People";
const Posts = () => {
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
              <Dropdown.Item href="#/action-1">Relevance</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Hot</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Top</Dropdown.Item>
              <Dropdown.Item href="#/action-3">New</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Most comments</Dropdown.Item>
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
          <PostsList />
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
