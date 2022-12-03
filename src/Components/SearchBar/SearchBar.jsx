// imports
import React from "react";
import { SearchItem } from "./SearchBar.styled";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { ItemContainer } from "./SearchBar.styled";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
import { useContext, useEffect } from "react";
import SearchContext from "Features/Search/Contexts/SearchWordContext/Search-context";
import fetchCommunities from "Features/Search/Services/fetchCommunities";
import fetchPeople from "Features/Search/Services/fetchPeople";
import { useNavigate } from "react-router-dom/dist";
/**
 * Component that displays the search results for a given search term.
 *
 * @returns {React.Component}
 */
const SearchBar = () => {
  const auth = useAuth();

  // navigation to search page
  const navigate = useNavigate();
  const ctx = useContext(SearchContext);

  // fetch communities
  let [CommunityList, errorCommunity, loadingCommunity, fetchCommunity] =
    useFetchFunction();
  // console.log("communities", CommunityList);

  // fetch People
  let [PeopleList, errorPeople, loadingPeople, FB] = useFetchFunction();
  // console.log("People", PeopleList);

  const searchWord = "text";
  ctx.wordHandler(searchWord);
  useEffect(() => {
    if (ctx.isLoggedIn) {
      fetchCommunities(fetchCommunity, auth, ctx.word);
      fetchPeople(FB, auth, ctx.word);
    }
  }, [ctx.word]);

  const formatResult = (item) => {
    return <ItemContainer>{item.name}</ItemContainer>;
  };

  // dummy data
  const items = [
    {
      id: 0,
      name: "C",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
    {
      id: 5,
      name: "React",
    },
    {
      id: 6,
      name: "Angular",
    },
  ];

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      ctx.wordHandler(event.target.value);
      navigate("/search/posts");
    }
  };

  return (
    <SearchItem onKeyDown={handleKeyDown}>
      <ReactSearchAutocomplete
        placeholder="Search Reddit"
        styling={SearchItem}
        items={items}
        autoFocus
        formatResult={formatResult}
      />
    </SearchItem>
  );
};

export default SearchBar;
