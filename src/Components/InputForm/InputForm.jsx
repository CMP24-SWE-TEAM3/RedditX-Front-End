// imports
import React from 'react';
import {StyledSearcherInput} from "./InputForm.styled";

/**
 * Component that displays   a search field with search results
 * @returns {React.Component}
 *
 */
const InputForm = () => {
    return (
        <StyledSearcherInput type="text" placeholder={'Search Reddit'}/>
    );
};

export default InputForm;
