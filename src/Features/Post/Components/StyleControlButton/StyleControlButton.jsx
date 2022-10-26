const StyleControlButton = ({ style, onToggle, active, label }) => {
  const onToggleHandler = (e) => {
    e.preventDefault();
    onToggle(style);
  };
  let className = "RichEditor-styleButton";
  if (active) {
    className += " RichEditor-activeButton";
  }
  return (
    <span className={className} onMouseDown={onToggleHandler}>
      {label}
    </span>
  );
};

export default StyleControlButton;
