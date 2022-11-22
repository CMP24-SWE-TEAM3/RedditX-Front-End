import IndexHeader from "Features/Subreddit/Components/Index Header/Header";
import IndexContainer from "Features/Subreddit/Components/Index Body/IndexContainer";
import { IndexPageContainer, StyledIndexPage } from "./IndexPage.styled";
import { useEffect } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import fetchIndexedCommunities from "Features/Subreddit/Services/fetchIndexedCommunities";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
/**
 * Component that contains the whole Indexing Page
 * @Component
 * @returns {React.Component}
 */
const IndexPage = () => {
const auth = useAuth();
const [communityIndex, error, loading, indexFetchFunction] = useFetchFunction();

useEffect(() => {
  fetchIndexedCommunities(indexFetchFunction, auth);
}, []); // Only re-run the effect if count changes
  return !loading && (
    <IndexPageContainer>
      <StyledIndexPage>
        <IndexHeader />
        <IndexContainer communityIndex = {communityIndex}/>
      </StyledIndexPage>
    </IndexPageContainer>
  );
};

export default IndexPage;
