import Header from "Features/Subreddit/Components/Index Header/Header";
import IndexContainer from "Features/Subreddit/Components/Index Body/IndexContainer";
import { IndexPageContainer, StyledIndexPage } from "./IndexPage.styled";

/**
 * Component that contains the whole Indexing Page
 * @Component
 * @returns {React.Component}
 */
const IndexPage = () => {
  return (
    <IndexPageContainer>
      <StyledIndexPage>
        <Header />
        <IndexContainer />
      </StyledIndexPage>
    </IndexPageContainer>
  );
};

export default IndexPage;
