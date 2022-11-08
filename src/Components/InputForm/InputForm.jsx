// imports
import React, {useState} from 'react';
import {StyledSearcherInput} from "./InputForm.styled";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from "react-bootstrap/DropdownMenu";
import SearchDropDown from "../SearchDropDown/SearchDropDown";

/**
 * Component that displays   a search field with search results
 * @returns {React.Component}
 *
 */

const InputForm = () => {
    const [show, setsShow] = useState(false);
    const handleDropdown = () => {
        setsShow(!show);
    }
    return (
        <>
            <StyledSearcherInput onClick={handleDropdown} type="text" placeholder={'Search Reddit'}/>
            <SearchDropDown show={show}/>
        </>
    );
};

export default InputForm;


