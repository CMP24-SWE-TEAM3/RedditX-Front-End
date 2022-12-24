// Import bootstrap components
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

// Import styled components
import { StyledButton } from "./StyleControlButton.styled";

/**
 * A button that controls the style of the text in rich (draft) text editor
 *
 * @param {String} style - style of the text
 * @param {Function} onToggle - function to toggle the style
 * @param {Boolean} active - whether the style is active or not
 * @param {String} label - label of the button
 * @param {React.Component} icon - icon of the button
 * @returns {React.Component} StyleControlButton component
 */
const StyleControlButton = ({ style, onToggle, active, label, icon }) => {
  const onToggleHandler = (e) => {
    e.preventDefault();
    onToggle(style);
  };

  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id="button-tooltip-2">{label}</Tooltip>}
    >
      <StyledButton
        id={label.replace(" ", "-")}
        active={active}
        onMouseDown={onToggleHandler}
        data-testid="style-control-button"
      >
        {icon}
      </StyledButton>
    </OverlayTrigger>
  );
};

export default StyleControlButton;
