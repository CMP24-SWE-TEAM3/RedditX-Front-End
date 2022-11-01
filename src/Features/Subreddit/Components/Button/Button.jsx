import { useState } from "react";
import { StyledButton } from "./Button.styled";

const Button = (props) => {
  const [text, setText] = useState(props.isJoined ? "joined" : "join");
  const onJoin = () => {
    props.onJoin(text === "join" ? true : false);
    setText((prev) => (prev === "join" ? "joined" : "join"));
  };
  const onHover = () => {
    if (props.isJoined) {
      setText("leave");
    }
  };

  const onLeave = () => {
    if (props.isJoined) {
      setText("joined");
    }
  };

  return (
    <StyledButton joined={props.isJoined}>
      <div className="width">
        <button onClick={onJoin} onMouseOver={onHover} onMouseOut={onLeave}>
          {text}
        </button>
      </div>
    </StyledButton>
  );
};

export default Button;
