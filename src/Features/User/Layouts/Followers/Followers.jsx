import {
  FollowersContainer,
  TextContainer,
  Text,
  SearchContainer,
  StyledDiv,
  SearchDiv,
  SearchInput,
  SearchButton,
} from "./Followers.styled";
import { useEffect, useState } from "react";
import { useFollowers } from "Features/User/Contexts/FollowersProvider";
import { FiSearch } from "react-icons/fi";
import Follower from "Features/User/Components/Follower/Follower";

const Followers = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const { followers } = useFollowers();

  function handleSearchTextChange(event) {
    setSearchText(event.target.value);
  }

  useEffect(() => {
    setFilteredList(followers);
  }, [followers]);

  function handleSearchButtonClick() {
    setFilteredList(
      followers.filter((follower) => {
        return (
          follower &&
          follower._id.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        );
      })
    );
  }

  return (
    <FollowersContainer>
      <SearchContainer>
        <TextContainer>
          <Text>Followers</Text>
          <StyledDiv>
            This list is only visible to you. The most recent follows are shown
            first.
          </StyledDiv>
        </TextContainer>
        <SearchDiv>
          <SearchInput
            type="text"
            placeholder="Search for a user"
            value={searchText}
            onChange={handleSearchTextChange}
          />

          <SearchButton onClick={handleSearchButtonClick}>
            <span className="icon">
              <FiSearch />
            </span>
          </SearchButton>
        </SearchDiv>
      </SearchContainer>
      {filteredList &&
        filteredList.length !== 0 &&
        filteredList.map((follower, i) => {
          return (
            <Follower
              key={i}
              followerID={follower._id}
              avatar={follower.avatar}
            />
          );
        })}
    </FollowersContainer>
  );
};

export default Followers;
