import React from 'react';
import {StyledSearchButton, StyledSearchIcon} from "./SearchBar.styled";
import {CiSearch} from 'react-icons/ci'
import InputForm from "Components/InputForm/InputForm";

const SearchBar = (props) => {
    return (
        <>
            <StyledSearchButton>
                <CiSearch style={{color: "red", position: "absolute", marginTop: '10px', minWidth: '50px'}}/>
                <InputForm/>
            </StyledSearchButton>
        </>
    );
};

export default SearchBar;
