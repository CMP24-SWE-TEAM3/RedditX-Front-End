// Import styled components
import { LinkTabContainer } from "./LinkTab.styled";

// Import components
import LinkForm from "Features/Post/Components/LinkForm/LinkForm";

/**
 * Link Tab component (Layout) (The tab that contains the link in create post page)
 *
 * @param {Function} submitPost - Function to submit the post
 * @param {Boolean} isLoading - If the post is loading or not
 * @returns {React.Component} Link Tab component (The tab that contains the link in create post page)
 */
const LinkTab = ({ submitPost, isLoading }) => {
  return (
    <div>
      <LinkTabContainer>
        <LinkForm submitPost={submitPost} isLoadingSubmit={isLoading} />
      </LinkTabContainer>
    </div>
  );
};

export default LinkTab;
