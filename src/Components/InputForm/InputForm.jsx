// imports
import React from "react";
import { StyledSearcherInput } from "./InputForm.styled";
import { useNavigate } from "react-router-dom/dist";
import SearchContext from "Features/Search/Contexts/SearchWordContext/Search-context";
import { useContext } from "react";
/**
 * Component that displays   a search field with search results
 * @param {setsShow} - function which toggles search dropdown visibility
 * @param {boolean}  - flag to toggle visibility of search dropdown
 * @returns {React.Component}
 *
 */

const InputForm = ({ setsShow, show }) => {
  /**
   * state of search field that show trending posts
   */
  const navigate = useNavigate();
  const ctx = useContext(SearchContext);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      ctx.wordHandler(event.target.value);
      navigate("/search/posts");
    }
  };
  return (
    <>
      <StyledSearcherInput
        id={"search-input"}
        onKeyDown={handleKeyDown}
        onClick={() => setsShow(!show)}
        type="text"
        placeholder={"Search Reddit"}
      />
    </>
  );
};

export default InputForm;
