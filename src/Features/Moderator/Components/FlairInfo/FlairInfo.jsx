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
import { useParams } from "react-router-dom";
import DeleteFlair from "Features/Moderator/Services/DeleteFlair";
// import { useParams } from "react-router-dom";
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
  const ctx = useContext(FlairContext);
  const [ShowColor, setShowColor] = useState(false);
  const [Black, setBlack] = useState(true);
  const [DisSave, setDisSave] = useState(false);
  const [PickColor, setPickColor] = useState(background);
  const [Count, setCount] = useState(64 - text.length);

  /**
   * function to handle change of color
   *
   * @param {String} color -  color in hex
   * @param {object} event -  event object
   */
  const handleChange = (color, event) => {
    setPickColor(color.hex);
    setback(color.hex);
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
    } else {
      // e.preventDefault();
      setEdit(false);
      ctx.EditHandler(false);
      if (isNew) {
        ctx.AddHandler(false);
      }
    }
  };
  const [Add, errorAdd, isLoadingAdd, fetchDataAdd] = useFetchFunction();

  const [Delete, errorDelete, isLoadingDelete, fetchDataDelete] =
    useFetchFunction();
  useEffect(() => {
    console.log("Add", !isLoadingAdd);
    ctx.ChangeFetchHandler(!ctx.ChangeFetch);
  }, [isLoadingAdd]);

  useEffect(() => {
    console.log("Delete", !isLoadingDelete);
    ctx.ChangeFetchHandler(!ctx.ChangeFetch);
  }, [isLoadingDelete]);
  /**
   * function to handle Save operation
   * @param {object} e -  event object
   */
  const { subredditId } = useParams();
  const auth = useAuth();
  const saveHandler = (e) => {
    // e.preventDefault();
    settheBegin((old) => ({
      ...old,
      ...theBegin,
    }));
    setEdit(false);
    ctx.EditHandler(false);
    const obj = {
      flairText: text,
      flairTextColor: color || "#000",
      flairBackGround: background || "#fff",
      flairModOnly: true,
      flairAllowUserEdits: true,
    };
    if (isNew) {
      ctx.AddHandler(false);
      // const { subredditId } = useParams();
      AddFlair(fetchDataAdd, obj, auth, subredditId);
      // if (!isLoading) {
      //   ctx.ChangeFetchHandler(!ctx.ChangeFetch);
      // }
    } else {
      /////////////////////
      // Edit
      ////////////////////
      AddFlair(fetchDataAdd, obj, auth, subredditId);

      const objDel = {
        id: id,
      };
      DeleteFlair(fetchDataDelete, obj, auth, subredditId);

      // if (!isLoading) {
      //   ctx.ChangeFetchHandler(!ctx.ChangeFetch);
      // }
    }
  };

  // const a = (e) => {
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
