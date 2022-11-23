// imports
import React from "react";
import { StyledSearchButton, StyledSearchIcon } from "./SearchBar.styled";
import InputForm from "Components/InputForm/InputForm";
import SearchDropDown from "Components/SearchDropDown/SearchDropDown";
import { useState } from "react";

/**
 * Component that displays the search results for a given search term.
 *
 * @returns {React.Component}
 */
const SearchBar = () => {
  // state that toggle the search dropdown
  const [show, setsShow] = useState(false);
  return (
    <>
      <StyledSearchButton>
        <StyledSearchIcon />
        <InputForm setsShow={setsShow} show={show} />
        <SearchDropDown show={show} />
      </StyledSearchButton>
    </>
  );
};

export default SearchBar;
