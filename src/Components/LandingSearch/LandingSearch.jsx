import React from 'react';
import {StyledSearchButton, StyledSearchIcon} from "./LandingSearch.styled";
import InputForm from "Components/InputForm/InputForm";

const   LandingSearch = (props) => {
    return (
        <>
            <StyledSearchButton>
                <StyledSearchIcon />
                <InputForm/>
            </StyledSearchButton>
        </>
    );
};

export default LandingSearch;
