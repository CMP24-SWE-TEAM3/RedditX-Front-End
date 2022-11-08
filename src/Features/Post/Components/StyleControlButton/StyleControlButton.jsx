// Import bootstrap components
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

// Import styled components
import { StyledButton } from "./StyleControlButton.styled";

/**
 *
 * @param {*} param0
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
      <StyledButton active={active} onMouseDown={onToggleHandler}>
        {icon}
      </StyledButton>
    </OverlayTrigger>
  );
};

export default StyleControlButton;
