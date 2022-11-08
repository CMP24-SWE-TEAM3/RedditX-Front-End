// Import styled components
import { LinkTabContainer } from "./LinkTab.styled";

// Import components
import LinkForm from "Features/Post/Components/LinkForm/LinkForm";

/**
 * Link Tab component (Layout) (The tab that contains the link in create post page)
 *
 * @param {Function} submitPost - Function to submit the post
 * @returns {React.Component} Link Tab component (The tab that contains the link in create post page)
 */
const LinkTab = ({ submitPost }) => {
  return (
    <div>
      <LinkTabContainer>
        <LinkForm submitPost={submitPost} />
      </LinkTabContainer>
    </div>
  );
};

export default LinkTab;
