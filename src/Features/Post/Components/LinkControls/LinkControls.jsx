// Import styled components
import { LinkControlsContainer, StyledButton } from "./LinkControls.styled";

// Import icons
import { BsLink45Deg } from "react-icons/bs";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

/**
 * The link control in the draft editor
 *
 * @param {Function} promptForLink - Function to show link form and prompt for link
 * @returns {React.Component} - The link control in the draft editor
 */
const LinkControls = ({ promptForLink }) => {
  return (
    <LinkControlsContainer>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="button-tooltip-2">Link</Tooltip>}
      >
        <StyledButton onMouseDown={promptForLink}>
          <BsLink45Deg size={25} />
        </StyledButton>
      </OverlayTrigger>
    </LinkControlsContainer>
  );
};

export default LinkControls;
