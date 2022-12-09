/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";

import ModeratorRow from "../ModeratorRow/ModeratorRow";

import { BiSearch } from "react-icons/bi";

import {
  Container,
  SearchContainer,
  SearchInput,
  SearchIcon,
} from "./AllModerators.styled";

/**
 * AllModerators component that is used in User management
 * @returns {React.Component}  AllModerators component that is used in User management
 */

const AllModerators = ({ Moderator }) => {
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilterMonsters] = useState(Moderator);

  useEffect(() => {
    const newFilteredMonsters = Moderator.filter((mod) => {
      return mod._id.substring(3).toLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [Moderator,searchField]);

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
          <ModeratorRow key={mod.userName} Moderator={mod}></ModeratorRow>
        ))}
      </Container>
    </>
  );
};

export default AllModerators;
