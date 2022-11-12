// imports
import React, {useState} from 'react';
import {StyledSearcherInput} from "./InputForm.styled";
import SearchDropDown from "../SearchDropDown/SearchDropDown";

/**
 * Component that displays   a search field with search results
 * @returns {React.Component}
 *
 */

const InputForm = () => {
    /**
     * state of search field that show trending posts
     */
    const [show, setsShow] = useState(false);
    const handleDropdown = () => {
        setsShow(!show);
    }
    return (
        <>
            <StyledSearcherInput id={'search-input'} onClick={handleDropdown} type="text" placeholder={'Search Reddit'}/>
            {/*<SearchDropDown show={show}/>*/}
        </>
    );
};

export default InputForm;


