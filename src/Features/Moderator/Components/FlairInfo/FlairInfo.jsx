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
const FlairInfo = ({
  text,
  color,
  background,
  setColor,
  setTextState,
  setback,
}) => {
  const intialState = {
    text: text,
    color: color,
    background: background,
  };
  console.log(intialState);
  const [ShowColor, setShowColor] = useState(false);
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
                      }
                      if (Count <= 60 && e.target.value.length < text.length) {
                        setTextState(e.target.value);
                        setCount(Count + 1);
                      }
                      //   if (Count === 0) {
                      //     setCount(0);
                      //   }
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
        </FlaironeEditApperence>
      </FlaironeEditInner>
      <DownButtons>
        <CancelBtn>Cancel</CancelBtn>
        <SaveBtn>Save</SaveBtn>
      </DownButtons>
    </FlaironeEdit>
  );
};

export default FlairInfo;
