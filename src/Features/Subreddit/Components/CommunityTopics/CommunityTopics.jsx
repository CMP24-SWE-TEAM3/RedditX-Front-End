import { useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import {MdOutlineClear} from "react-icons/md"
import { RiArrowDownSLine } from "react-icons/ri";
import SaveChangesModal from "../SaveChangesModal/SaveChangesModal";
import {
  AddSubTopic,
  AddSubTopicContainer,
  AddTopic,
  AddTopicBtn,
  Cancel,
  CommunityTopic,
  Container,
  DropDown,
  DropDownBtn,
  ItemContainer,
  NoSubTopics,
  NumOfSubTopics,
  PlusSpan,
  Save,
  StyledTooltip,
  SubtopicsContainer,
  SuggestedTopicsContainer,
  TopicsBlockHandle,
} from "./CommunityTopics.styled";

/**
 * Community topic and subtopics
 *
 * @returns {React.Component}
 */
const CommunityTopics = () => {
  //state to handle the view of drop down of topics
  const [viewTopics, setViewTopics] = useState(false);
  //state that store the main topic of community
  const [topic, setTopic] = useState("");
  //state that store the written subtopic
  const [subtopic, setSubtopic] = useState("");
  //the subtopics of community
  const [subtopics, setSubtopics] = useState([]);
  //state to view the input form of subtopic
  // const [viewSubtopicInput, setViewSubtopicInput] = useState(false);
  //state that handle the focus of container that has subtopics & input form
  const [focus, setFocus] = useState(false);
  //the last topics from prev session
  const [lastSubtopics, setLastSubtopics] = useState(subtopics);
  //state that show the modal on blur
  const [modalShow, setModalShow] = useState(false);
  //

  //topics and suggested topics
  let topics = [
    { topic: "Activism" },
    { topic: "Sports" },
    { topic: "Anime" },
    { topic: "Pla" },
    { topic: "Plapla" },
    { topic: "Haha" },
    { topic: "Good" },
  ];

  //useEffect();

  /**
   * handler on change of the input form of subtopic
   *
   * @param {Event} event - event
   */
  function subtopicHandler(event) {
    setSubtopic(event.target.value);
  }

  /**
   * handler on click the topic item in the drop menu of topics
   *
   * @param {Event} event -event
   */
  function DropItemHandler(event) {
    setTopic(event.target.innerText);
    //to hide drop menu
    setViewTopics(false);
  }

  /**
   * handler on click the drop menu to toggle show of drop menu
   */
  function viewHandler() {
    //toggle view of drop down menu
    setViewTopics((prev) => !prev);
  }

  /**
   * handler on blur from the selection of topic hide drop down menu
   *
   * @param {Event} event -event
   */
  function blurHandler(event) {
    //this if condition so if click on one from topics doesn't blur
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setViewTopics(false);
    }
  }

  /**
   * handler on click to add subtopic when there is no topics
   */
  function viewSubtopicInputHandler() {
    //view input to add subtopic
    // setViewSubtopicInput(true);
    setFocus(true);
  }

  /**
   * handler on click item from subtopic drop down menu
   *
   * @param {Event} event - event
   */
  function clickSubtopicHandler(event) {
    const index = subtopics.findIndex((element) => {
      return element.toLowerCase() === event.target.innerText.toLowerCase();
    });
    //check if this subtopic in the subtopics don't add it
    if (index === -1) {
      setSubtopics((prev) => {
        return [...prev, event.target.innerText];
      });
    }
    // setViewSubtopicInput(true);
    setSubtopic("");
    setFocus(true);
  }

  /**
   * handler on keydown check enter key to add topic
   *
   * @param {Event} event - event
   */
  function enterSubtopicHandler(event) {
    if (event.key === "Enter") {
      const index = subtopics.findIndex((element) => {
        return element.toLowerCase() === event.target.value.toLowerCase();
      });
      if (index === -1 && event.target.value !== "") {
        setSubtopics((prev) => {
          return [...prev, event.target.value];
        });
      }
      setSubtopic("");
      setFocus(true);
    }
  }

  /**
   * handler on click cancel button to discard changes
   */
  function cancelHandler() {
    // dummySubtopics.forEach((element) => {
    //   setSubtopics((prev) => prev.filter((value) => value !== element));
    // });
    setSubtopics(lastSubtopics);
    setSubtopic("");
    setFocus(false);
    setModalShow(false);
  }

  /**
   * handler on click save button to save changes
   */
  function saveHandler() {
    setFocus(false);
    setModalShow(false);
    setLastSubtopics(subtopics);
  }

  /**
   * handler on blur from the container of input of subtopics
   *
   * @param {Event} event - event
   */
  function blurFirstInputHandle(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      if (
        JSON.stringify(subtopics.sort()) !==
        JSON.stringify(lastSubtopics.sort())
      ) {
        setModalShow(true);
      } else setFocus(false);
    }
  }

  /**
   * handler for model x button
   */
  /*
  function hideHandler() {
    setModalShow(false);
    // setViewSubtopicInput(true);
    setFocus(true);
  }
  */

  /**
   * handler on click subtopic item
   *
   * @param {Event} e - event
   */
  function clickSubtopicItemHandler(e) {
    if (focus) {
      setSubtopics((prev) =>
        prev.filter((value) => value !== e.target.innerText)
      );
    }
  }

  /**
   * handler on click "x" in subtopic item
   *
   * @param {Event} e - event
   */
  function clickXHandler(e) {
    if (focus) {
      setSubtopics((prev) =>
        prev.filter(
          (value) => value !== e.target.parentNode.parentNode.innerText
        )
      );
    }
  }

  /**
   * handler when click add in suggested dropdown
   *
   * @param {Event} e - event
   */
  function clickAddHandler(e) {
    const add = e.target.innerText;
    const final = add.slice(4, add.length);
    const index = subtopics.findIndex((element) => {
      return element.toLowerCase() === final.toLowerCase();
    });

    if (index === -1) {
      setSubtopics((prev) => {
        return [...prev, final];
      });
    }
    setSubtopic("");
  }

  //filtered array menu of suggested subtopics by input of user
  const filteredTopics = topics.filter((topic) => {
    return topic.topic.toLowerCase().indexOf(subtopic.toLowerCase()) !== -1;
  });

  /**
   * drop down menu of topics
   *
   * @param {Array<string>} data
   * @returns {React.Component} 
   */
  const TopicsBlock = ({ data }) => {
    return (
      <DropDown onBlur={blurHandler} tabIndex={0}>
        {data.map((element, i) => {
          return (
            <DropDownItem
              key={i}
              text={element.topic}
              selected={topic}
              clickHandle={DropItemHandler}
              weight={500}
            />
          );
        })}
      </DropDown>
    );
  };

  /**
   * drop down item
   *
   * @param {string} text - text of topic/subtopic
   * @param {string} selected - the selected topic/subtopic
   * @param {function}  clickHandle - handler on click topic/subtopic
   * @param {function} weight - font weight of text
   * @returns {React.Component}
   */
  const DropDownItem = ({ text, selected, clickHandle, weight }) => {
    return (
      <DropDownBtn
        className={selected === text ? "active" : ""}
        onClick={clickHandle}
        selected={selected}
        weight={weight}
      >
        {text}
        {selected === text && (
          <span>
            <BsCheck />
          </span>
        )}
      </DropDownBtn>
    );
  };

  //subtopic item
  /**
   * subtopic item
   *
   * @param {string} text - subtopic text
   * @param {function} onClick - function handle on click the item
   * @returns {React.Component}
   */
  const SubtopicItem = ({ text, onClick }) => {
    return (
      <ItemContainer focus={focus} onClick={onClick} tabIndex="0">
        {text}
        {focus && (
          <span className="icon" tabIndex="0" onClick={clickXHandler}>
            <MdOutlineClear />
          </span>
        )}
      </ItemContainer>
    );
  };

  /**
   * container that contain subtopics and input for subtopic
   *
   * @returns {React.Component}
   */
  const SubtopicsContent = () => {
    return (
      <SubtopicsContainer
        onClick={() => {
          setFocus(true);
        }}
        // onBlur={outsideHandler}
        focus={focus}
        tabIndex="0"
      >
        {focus &&
          subtopics.map((topic, i) => {
            return (
              <SubtopicItem
                key={i}
                text={topic}
                onClick={clickSubtopicItemHandler}
              />
            );
          })}
        {!focus && (
          <>
            {subtopics.slice(0, 4).map((topic, i) => {
              return (
                <SubtopicItem
                  key={i}
                  text={topic}
                  onClick={clickSubtopicItemHandler}
                />
              );
            })}
            {subtopics.length > 4 && (
              <PlusSpan>{`+${subtopics.length - 4}`}</PlusSpan>
            )}
            <span className="icon">
              <HiOutlinePencil />
            </span>
          </>
        )}
        <span tabIndex={-1}></span>
        <input
          type="text"
          maxLength={64}
          value={subtopic}
          autoFocus={focus}
          onChange={subtopicHandler}
          onKeyDown={enterSubtopicHandler}
        />
        {focus && <SubtopicBlock />}
      </SubtopicsContainer>
    );
  };

  /**
   * drop down of suggested subtopics
   *
   * @returns {React.Component}
   */
  const SubtopicBlock = () => {
    return (
      <TopicsBlockHandle className="topics-block-handle">
        <SuggestedTopicsContainer>
          <div className="suggested-container">
            {!filteredTopics && <h3>Suggested topics</h3>}
            {filteredTopics.map((element, i) => {
              return (
                <DropDownItem
                  key={i}
                  text={element.topic}
                  selected={""}
                  weight={400}
                  clickHandle={clickSubtopicHandler}
                />
              );
            })}
            {subtopic.length !== 0 && (
              <div className="add" tabIndex="0" onClick={clickAddHandler}>
                <span>{`Add  `}</span>
                {subtopic}
              </div>
            )}
          </div>
        </SuggestedTopicsContainer>
      </TopicsBlockHandle>
    );
  };

  return (
    <Container>
      {/*container for header of adding a topic */}
      <CommunityTopic>
        {!topic && <span className="new">New</span>}
        Community topics
        <OverlayTrigger
          placement={"top"}
          overlay={
            <StyledTooltip>
              Adding community topics allow people to find your community. Add a
              primary topic and subtopics to be discoverd more easily
            </StyledTooltip>
          }
          delay="200"
        >
          <span className="topic-icon">
            <AiOutlineInfoCircle />
          </span>
        </OverlayTrigger>
      </CommunityTopic>

      {/*button that you click to add a topic  */}
      <AddTopic onBlur={blurHandler}>
        <AddTopicBtn onClick={viewHandler}>
          <span>{topic || "Add a Primary Topic"}</span>
          <span className="icon">
            <RiArrowDownSLine />
          </span>
        </AddTopicBtn>
        {viewTopics && <TopicsBlock data={topics} />}
      </AddTopic>

      {/*if there is a topic will container that allow adding subtopics */}
      {topic && (
        <AddSubTopicContainer onBlur={blurFirstInputHandle}>
          {/*component appear if there is no subtopics */}
          {subtopics.length === 0 && !focus && (
            <AddSubTopic onClick={viewSubtopicInputHandler}>
              <span className="icon">
                <FaPlus />
              </span>
              Add subtopics
            </AddSubTopic>
          )}

          {/*Component that view added subtopics  */}
          {(subtopics.length > 0 || focus) && <SubtopicsContent />}

          {/*to view number of topics, cancel button, save button */}
          {focus && (
            <NumOfSubTopics>
              <NoSubTopics>{subtopics.length + "/25"}</NoSubTopics>
              <Cancel onClick={cancelHandler} tabIndex="0">
                Cancel
              </Cancel>
              <Save onClick={saveHandler} tabIndex="0">
                Save
              </Save>
            </NumOfSubTopics>
          )}
        </AddSubTopicContainer>
      )}

      {/*modal */}
      <SaveChangesModal
        show={modalShow}
        onDiscard={cancelHandler}
        onSave={saveHandler}
        onHide={() => setModalShow(false)}
        showX={false}
      />
    </Container>
  );
};

export default CommunityTopics;
