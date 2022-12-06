import {
  BackgroundFlair,
  BackgroundFlairPicker,
  CancelBtn,
  DownButtons,
  FlaironeEdit,
  FlaironeEditApperence,
  FlaironeEditInner,
  FlairTexSpant,
  FlairText,
  InDiv,
  Remain,
  SaveBtn,
  TextFlairPicker,
} from "./FlairInfo.styled";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import React from "react";
import {
  SketchPicker,
  GithubPicker,
  ChromePicker,
  TwitterPicker,
  CompactPicker,
} from "react-color";
import { useContext } from "react";
import FlairContext from "Features/Moderator/Contexts/Safe-context";
const FlairInfo = ({
  text,
  color,
  background,
  setColor,
  setTextState,
  setback,
  Edit,
  setEdit,
  isNew,
}) => {
  const intialState = {
    text: text,
    color: color,
    background: background,
  };
  const ctx = useContext(FlairContext);
  console.log(intialState);
  const [ShowColor, setShowColor] = useState(false);
  const [Black, setBlack] = useState(true);
  const [DisSave, setDisSave] = useState(false);
  const [PickColor, setPickColor] = useState(background);
  const [Count, setCount] = useState(64 - text.trim().length);
  console.log(text.trim().length);
  const handleChange = (color, event) => {
    setPickColor(color.hex);
    setback(color.hex);
    console.log(color);
    // setShowColor(false);
  };
  const handleChangeComplete = (color, event) => {
    setPickColor(color.hex);
    console.log(color);
    setback(color.hex);

    // setShowColor(false);
  };
  const CancelHandler = (e) => {
    e.preventDefault();
    setEdit(false);
    ctx.EditHandler(false);
    if (isNew) {
      ctx.AddHandler(false);
    }
  };
  const saveHandler = (e) => {
    e.preventDefault();
    setEdit(false);
    ctx.EditHandler(false);
    if (isNew) {
      ctx.AddHandler(false);
    }
  };
  return (
    <FlaironeEdit>
      <FlaironeEditInner>
        <FlaironeEditApperence>
          <legend>FLAIR APPEARANCE</legend>
          <FlairText>
            <label htmlFor="">
              <FlairTexSpant>Flair text</FlairTexSpant>
              <div>
                <InDiv>
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => {
                      if (Count > 0 && e.target.value.length > text.length) {
                        setTextState(e.target.value);
                        setCount(Count - 1);
                        setDisSave(false);
                      }
                      if (Count <= 64 && e.target.value.length < text.length) {
                        setTextState(e.target.value);
                        setCount(Count + 1);
                      }
                      if (e.target.value.length === 0) {
                        setDisSave(true);
                      }
                    }}
                  />
                </InDiv>
                <Remain>{Count} characters remaining</Remain>
              </div>
            </label>
          </FlairText>
          <BackgroundFlair>
            <label htmlFor="">
              <span>Flair background color</span>
              <BackgroundFlairPicker
                onClick={() => {
                  // setPickColor(background);
                  setShowColor(!ShowColor);
                }}
                PickColor={PickColor}
              >
                <span>
                  <MdKeyboardArrowDown />
                </span>
              </BackgroundFlairPicker>
            </label>
            {ShowColor && (
              <CompactPicker
                color={PickColor}
                onChange={handleChange}
                onChangeComplete={handleChangeComplete}
              />
            )}
          </BackgroundFlair>
          {/*  */}
          <BackgroundFlair>
            <label htmlFor="">
              <span>Flair text color</span>
              <TextFlairPicker
                Black={Black}
                onClick={() => {
                  let c = !Black ? "#ffff" : "#000";
                  setColor(c);
                  setBlack(!Black);
                }}
              >
                Aa
              </TextFlairPicker>
            </label>
          </BackgroundFlair>
          {/*  */}
        </FlaironeEditApperence>
      </FlaironeEditInner>
      <DownButtons>
        <CancelBtn onClick={CancelHandler}>Cancel</CancelBtn>
        <SaveBtn disabled={DisSave} onClick={saveHandler}>
          Save
        </SaveBtn>
      </DownButtons>
    </FlaironeEdit>
  );
};

export default FlairInfo;
