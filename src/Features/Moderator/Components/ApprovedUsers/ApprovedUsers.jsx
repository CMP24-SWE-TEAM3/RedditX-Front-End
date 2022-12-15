/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";

import ModeratorRow from "../ModeratorRow/ModeratorRow";

import { BiSearch } from "react-icons/bi";

import {
  Container,
  SearchContainer,
  SearchInput,
  SearchIcon,
} from "./ApprovedUsers.styled";

/**
 * ApprovedUsers component that is used in User management
 * @returns {React.Component}  ApprovedUsers component that is used in User management
 */

const ApprovedUsers = ({ Moderator, communityName }) => {
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilterMonsters] = useState(Moderator);

  useEffect(() => {
    const newFilteredMonsters = Moderator.filter((mod) => {
      return mod._id?.substring(3).toLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [Moderator, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <>
      <SearchContainer>
        <SearchInput
          onChange={onSearchChange}
          placeholder="Search for a user"
        ></SearchInput>
        <SearchIcon>
          <BiSearch></BiSearch>
        </SearchIcon>
      </SearchContainer>
      <Container>
        {filteredMonsters.map((mod) => (
          <ModeratorRow
            communityName={communityName}
            key={mod.userName}
            Moderator={mod}
            approved={true}
          ></ModeratorRow>
        ))}
      </Container>
    </>
  );
};

export default ApprovedUsers;
