import { useState } from "react";
import { StyledButton } from "./Button.styled";

/**
 * 
 * @param {boolean} isJoined - boolean if joined community or not
 * @param {function} onJoin - function receive state of joining
 * @returns {React.Component} Join button
 */
const Button = ({isJoined, onJoin}) => {
  const [text, setText] = useState(isJoined ? "joined" : "join");

  /**
   * function handle click join button
   */
  const onClickJoin = () => {
    onJoin(text === "join" ? true : false);
    setText((prev) => (prev === "join" ? "joined" : "join"));
  };

  /**
   * function handle text when hover button
   */
  const onHover = () => {
    if (isJoined) {
      setText("leave");
    }
  };

  /**
   * function handle text when mouse out the button
   */
  const onLeave = () => {
    if (isJoined) {
      setText("joined");
    }
  };

  return (
    <StyledButton joined={isJoined}>
      <div className="width">
        <button onClick={onClickJoin} onMouseOver={onHover} onMouseOut={onLeave} className="join">
          {text}
        </button>
      </div>
    </StyledButton>
  );
};

export default Button;
