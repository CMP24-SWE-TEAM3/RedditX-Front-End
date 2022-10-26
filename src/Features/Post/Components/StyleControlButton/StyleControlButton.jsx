import { StyledButton } from "./StyleControlButton.styled";

const StyleControlButton = ({ style, onToggle, active, label, icon }) => {
  const onToggleHandler = (e) => {
    e.preventDefault();
    onToggle(style);
  };

  return (
    <StyledButton active={active} onMouseDown={onToggleHandler}>
      {icon}
    </StyledButton>
  );
};

export default StyleControlButton;
