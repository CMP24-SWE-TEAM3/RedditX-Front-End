import {
  ButtonDel,
  ButtonDel2,
  ButtonDeleteAll,
  Buttons,
  FlairClassN,
  Flairone,
  FlaironeExact,
  FlairSettings,
  FlairStyle,
} from "./Flair.styled";
import { RiDeleteBin5Fill } from "react-icons/ri";
import FlairInfo from "../FlairInfo/FlairInfo";
import { useState } from "react";
const Flair = ({ text, color, background }) => {
  const [back, setback] = useState(background);
  const [textState, setTextState] = useState(text);
  const [Color, setColor] = useState(color);
  return (
    <>
      <Flairone>
        <FlaironeExact>
          <FlairStyle flairColor={Color} flairBackgroundColor={back}>
            {textState}
          </FlairStyle>
        </FlaironeExact>
        <FlairClassN></FlairClassN>
        <FlairSettings></FlairSettings>
        <Buttons>
          <ButtonDel>Copy Id</ButtonDel>
          <ButtonDel2>Edit</ButtonDel2>
          <ButtonDeleteAll>
            <span>
              <RiDeleteBin5Fill />
            </span>
          </ButtonDeleteAll>
        </Buttons>
      </Flairone>
      <FlairInfo
        text={textState}
        color={Color}
        background={back}
        setback={setback}
        setTextState={setTextState}
        setColor={setColor}
      />
    </>
  );
};

export default Flair;
