import Header from "Features/Subreddit/Components/Index Header/Header";
import IndexContainer from "Features/Subreddit/Components/Index Body/IndexContainer"
import {IndexPageContainer, IndexPage} from './IndexPageStyles'

/**
 * Component that contains the whole Indexing Page
 *
 * @returns {React.Component}
 */
function Index() {
  return (
    <IndexPageContainer>
      <IndexPage>
        <Header />
        <IndexContainer />
      </IndexPage>
    </IndexPageContainer>
  );
}

export default Index;
