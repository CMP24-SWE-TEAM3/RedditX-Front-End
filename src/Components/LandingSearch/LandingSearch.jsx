import React from 'react';
import {StyledSearchButton, StyledSearchIcon} from "./SearchLogin.styled";
import InputForm from "Components/InputForm/InputForm";

const   SearchLogin = (props) => {
    return (
        <>
            <StyledSearchButton>
                <StyledSearchIcon />
                <InputForm/>
            </StyledSearchButton>
        </>
    );
};

export default SearchLogin;
