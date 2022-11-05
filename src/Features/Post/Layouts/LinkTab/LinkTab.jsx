// Import styled components
import { LinkTabContainer } from "./LinkTab.styled";

// Import components
import LinkForm from "Features/Post/Components/LinkForm/LinkForm";

/**
 * Link Tab component (Layout) (The tab that contains the link in create post page)
 *
 * @returns {React.Component} Link Tab component (The tab that contains the link in create post page)
 */
const LinkTab = () => {
  return (
    <div>
      <LinkTabContainer>
        <LinkForm />
      </LinkTabContainer>
    </div>
  );
};

export default LinkTab;
