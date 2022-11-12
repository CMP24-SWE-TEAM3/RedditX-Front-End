// imports
import React from 'react';
import {StyledSearchButton, StyledSearchIcon} from "./SearchBar.styled";
import InputForm from "Components/InputForm/InputForm";

/**
 * Component that displays the search results for a given search term.
 *
 * @returns {React.Component}
 */
const SearchBar = (props) => {
    return (
        <>
            <StyledSearchButton>
                <StyledSearchIcon/>
                <InputForm/>
            </StyledSearchButton>
        </>
    );
};

export default SearchBar;
