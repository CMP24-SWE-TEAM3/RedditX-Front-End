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
  IconSort,
} from "./Flair.styled";
import { RiDeleteBin5Fill } from "react-icons/ri";
import FlairInfo from "../FlairInfo/FlairInfo";
import { useState } from "react";
import { useContext } from "react";
import FlairContext from "Features/Moderator/Contexts/Safe-context";
import { useEffect } from "react";
import { TbColumns } from "react-icons/tb";
import DeleteModal from "../DeleteModal/DeleteModal";

/**
 * Component that contains Flair Item
 *
 * @Component
 * @param {String} text -  the text of Flair
 * @param {String} color -  the color of Flair
 * @param {String} background -  the background of Flair
 * @param {boolean} isNew -  the state of Flair is it created new or only fetched
 * @param {object} innerRef -  useful to drag and drop
 * @param {object} rest -  useful to drag and drop
 * @returns {React.Component}
 */
const Flair = ({ text, color, background, isNew, innerRef, id, ...rest }) => {
  const [back, setback] = useState(background);
  const [textState, setTextState] = useState(text);
  const [Color, setColor] = useState(color);
  const [Edit, setEdit] = useState(false);
  const [ShowModal, setShowModal] = useState(false);
  const ctx = useContext(FlairContext);
  useEffect(() => {
    if (isNew) {
      setEdit(true);
      ctx.EditHandler(true);
    }
  }, []);
  console.log(id);
  return (
    <>
      {ShowModal && (
        <DeleteModal
          ShowModal={ShowModal}
          setShowModal={setShowModal}
          id={id}
        />
      )}
      <Flairone ref={innerRef} {...rest} title="flair">
        <FlaironeExact>
          <FlairStyle flairColor={Color} flairBackgroundColor={back}>
            {textState}
          </FlairStyle>
        </FlaironeExact>
        <FlairClassN></FlairClassN>
        <FlairSettings></FlairSettings>
        {!ctx.Reorder && (
          <Buttons>
            <ButtonDel>Copy Id</ButtonDel>
            <ButtonDel2
              onClick={() => {
                setEdit(true);
                ctx.EditHandler(true);
                // setShowModal(true);
                // console.log("show");
              }}
              disabled={ctx.Edit}
              title="edit"
            >
              Edit
            </ButtonDel2>
            <ButtonDeleteAll
              disabled={Edit}
              onClick={() => {
                setShowModal(true);
                console.log("show");
              }}
              title="delete"
            >
              <span
                onClick={() => {
                  // setShowModal(true);
                }}
              >
                <RiDeleteBin5Fill />
              </span>
            </ButtonDeleteAll>
          </Buttons>
        )}
        {ctx.Reorder && (
          <IconSort>
            <TbColumns />
          </IconSort>
        )}
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
          id={id}
        />
      )}
    </>
  );
};

export default Flair;
