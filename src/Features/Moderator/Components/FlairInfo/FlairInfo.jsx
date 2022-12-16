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
import { useRef } from "react";
import useOutsideAlerter from "Features/Moderator/Hooks/useOutsideAlerter";
import { useEffect } from "react";
import CancelModal from "../CancelModal/CancelModal";
import AddFlair from "Features/Moderator/Services/AddFlair";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";

/**
 * Component that contains the Postslist component and the PostslistItems.
 *
 * @Component
 * @param {String} text -  the text of Flair
 * @param {String} color -  the color of Flair
 * @param {boolean} Edit -  is this flair are editing now
 * @param {String} background -  the background of Flair
 * @param {boolean} isNew -  the state of Flair is it created new or only fetched
 * @param {function} setColor -  Handle color state
 * @param {function} setTextState -  Handle text state
 * @param {function} setback -  Handle background state
 * @param {function} setEdit -  Handle Edit state
 * @returns {React.Component}
 */
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
  id,
}) => {
  const [ShowModal, setShowModal] = useState(false);
  const [theBegin, settheBegin] = useState({
    text: text,
    color: color,
    background: background,
  });
  console.log("xxb", theBegin);
  const ctx = useContext(FlairContext);
  // console.log("ali", intialState);
  const [ShowColor, setShowColor] = useState(false);
  const [Black, setBlack] = useState(true);
  const [DisSave, setDisSave] = useState(false);
  const [PickColor, setPickColor] = useState(background);
  const [Count, setCount] = useState(64 - text.length);
  console.log(text.length);

  /**
   * function to handle change of color
   *
   * @param {String} color -  color in hex
   * @param {object} event -  event object
   */
  const handleChange = (color, event) => {
    setPickColor(color.hex);
    setback(color.hex);
    console.log(color);
    // setShowColor(false);
  };
  /**
   * function to handle complete change of color
   *
   * @param {String} color -  color in hex
   * @param {object} event -  event object
   */
  const handleChangeComplete = (color, event) => {
    setPickColor(color.hex);
    console.log(color);
    setback(color.hex);
  };
  /**
   * function to handle Cancel operation
   * @param {object} e -  event object
   */
  const CancelHandler = (e) => {
    if (
      text !== theBegin.text ||
      color !== theBegin.color ||
      background !== theBegin.background
    ) {
      setShowModal(true);
      console.log("object");
    } else {
      // e.preventDefault();
      setEdit(false);
      ctx.EditHandler(false);
      if (isNew) {
        ctx.AddHandler(false);
      }
    }
  };
  const [Community, error, isLoading, fetchData] = useFetchFunction();

  /**
   * function to handle Save operation
   * @param {object} e -  event object
   */
  const auth = useAuth();
  const saveHandler = (e) => {
    // e.preventDefault();
    settheBegin((old) => ({
      ...old,
      ...theBegin,
    }));
    setEdit(false);
    ctx.EditHandler(false);
    if (isNew) {
      ctx.AddHandler(false);
      const obj = {
        flairText: text,
        flairTextColor: color,
        flairBackGround: background,
        flairModOnly: true,
        flairAllowUserEdits: true,
      };
      AddFlair(fetchData, obj, auth, "ali");
      // console.log(Community, isLoading);
      if (!isLoading) {
        ctx.ChangeFetchHandler(!ctx.ChangeFetch);
      }
    }
  };

  // const a = (e) => {
  //   console.log("ffd");
  // };
  const wrapperRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    if (Count === 64) {
      setDisSave(true);
    }
  }, []);
  useEffect(() => {
    setCount(64 - text.length);
  }, [text]);
  console.log(Count);
  const onDiscard = () => {
    setTextState(theBegin.text);
    setColor(theBegin.color);
    setback(theBegin.background);
    setEdit(false);
    ctx.EditHandler(false);
    if (isNew) {
      ctx.AddHandler(false);
    }
  };
  return (
    <FlaironeEdit title="flairEdit">
      {ShowModal && (
        <CancelModal
          ShowModal={ShowModal}
          setShowModal={setShowModal}
          onDiscard={onDiscard}
        />
      )}
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
                    ref={inputRef}
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
                ref={wrapperRef}
              />
            )}
          </BackgroundFlair>
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
