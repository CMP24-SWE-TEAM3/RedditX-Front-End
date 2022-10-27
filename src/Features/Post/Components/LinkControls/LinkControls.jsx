// Import styled components
import { LinkControlsContainer, StyledButton } from "./LinkControls.styled";

// Import icons
import { BsLink45Deg } from "react-icons/bs";
const LinkControls = ({ promptForLink, removeLink }) => {
  return (
    <LinkControlsContainer>
      <StyledButton onMouseDown={promptForLink}>
        <BsLink45Deg size={25} />
      </StyledButton>
    </LinkControlsContainer>
  );
};

export default LinkControls;
