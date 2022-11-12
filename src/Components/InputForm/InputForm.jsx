// imports
import React, { useState } from "react";
import { StyledSearcherInput } from "./InputForm.styled";
import SearchDropDown from "../SearchDropDown/SearchDropDown";
import { useNavigate } from "react-router-dom/dist";

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
  };
  const navigate = useNavigate();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      navigate("/search/posts");
    }
  };
  return (
    <>
      <StyledSearcherInput
        id={"search-input"}
        onKeyDown={handleKeyDown}
        onClick={handleDropdown}
        type="text"
        placeholder={"Search Reddit"}
      />
      {/*<SearchDropDown show={show}/>*/}
    </>
  );
};

export default InputForm;
