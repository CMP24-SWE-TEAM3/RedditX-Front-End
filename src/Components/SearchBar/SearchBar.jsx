import React from 'react';
import {StyledSearchButton, StyledSearchIcon} from "./SearchBar.styled";
import InputForm from "Components/InputForm/InputForm";

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
