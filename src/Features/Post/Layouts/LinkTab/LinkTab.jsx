// Import styled components
import LinkForm from "Features/Post/Components/LinkForm/LinkForm";
import { LinkTabContainer } from "./LinkTab.styled";

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
