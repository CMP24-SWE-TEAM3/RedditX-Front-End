import React from "react";
import { SearchItem } from "./Search.styled";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { ItemContainer } from "./Search.styled";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
import { useContext, useEffect } from "react";
import SearchContext from "Features/Search/Contexts/SearchWordContext/Search-context";
import fetchCommunities from "Features/Search/Services/fetchCommunities";
import fetchPeople from "Features/Search/Services/fetchPeople";

/**
 * Component that displays the search results for a given search term.
 *
 * @returns {React.Component}
 */
const Search = () => {
  const auth = useAuth();

  // fetch communities
  let [CommunityList, errorCommunity, loadingCommunity, fetchCommunity] =
    useFetchFunction();
  console.log("communities", CommunityList);

  // fetch People
  let [PeopleList, errorPeople, loadingPeople, FB] = useFetchFunction();
  // console.log("People", PeopleList);

  const searchWord = "text";
  const ctx = useContext(SearchContext);
  ctx.wordHandler(searchWord);
  useEffect(() => {
    if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;

    fetchCommunities(fetchCommunity, auth, ctx.word);
    fetchPeople(FB, auth, ctx.word);
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
  return (
    <SearchItem>
      <ReactSearchAutocomplete
        placeholder="Search Reddit"
        styling={SearchItem}
        items={CommunityList.result}
        autoFocus
        formatResult={formatResult}
      />
    </SearchItem>
  );
};
export default Search;
