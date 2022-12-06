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
import { useContext } from "react";
import FlairContext from "Features/Moderator/Contexts/Safe-context";
import { useEffect } from "react";
const Flair = ({ text, color, background, isNew }) => {
  const [back, setback] = useState(background);
  const [textState, setTextState] = useState(text);
  const [Color, setColor] = useState(color);
  const [Edit, setEdit] = useState(false);
  const ctx = useContext(FlairContext);
  useEffect(() => {
    if (isNew) {
      setEdit(true);
      ctx.EditHandler(true);
    }
  }, []);
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
          <ButtonDel2
            onClick={() => {
              setEdit(true);
              ctx.EditHandler(true);
            }}
            disabled={Edit}
          >
            Edit
          </ButtonDel2>
          <ButtonDeleteAll disabled={Edit}>
            <span>
              <RiDeleteBin5Fill />
            </span>
          </ButtonDeleteAll>
        </Buttons>
      </Flairone>
      {Edit && (
        <FlairInfo
          text={textState}
          color={Color}
          background={back}
          setback={setback}
          setTextState={setTextState}
          setColor={setColor}
          Edit={Edit}
          setEdit={setEdit}
          isNew={isNew}
        />
      )}
    </>
  );
};

export default Flair;
