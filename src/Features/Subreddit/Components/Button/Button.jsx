import { useState } from "react";
import { StyledButton } from "./Button.styled";

const Button = (props) => {

  const [text, setText] = useState(props.isJoined?"join":"joined");
  const onJoin = () =>{
    setText((prev)=>(prev==="join")?"joined":"join")
  }
  const onHover = () => {
    if(props.isJoined){
      setText("leave")
    }
  }

  const onLeave = () =>{
    if(props.isJoined){
      setText("joined")
    }
  }

  return ( 
    <StyledButton>
      <div className="width">
        <button onClick={onJoin} onMouseOver={onHover} onMouseOut={onLeave}>{text}</button>
      </div>
    </StyledButton>
   );
}
 
export default Button;