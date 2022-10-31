import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";
import { RiArrowDownSLine } from "react-icons/ri";
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
  InputSubTopic,
  InputSubTopicContainer,
  ItemContainer,
  NoSubTopics,
  NumOfSubTopics,
  Save,
  SubtopicsContainer,
  SuggestedTopicsContainer,
  TopicsBlockHandle
} from "./CommunityTopics.styled";

const CommunityTopics = (props) => {
  const [viewTopics, setViewTopics] = useState(false);
  const [topic, setTopic] = useState("");
  const [subtopic, setSubtopic] = useState("");
  const [subtopics, setSubtopics] = useState([]);
  const [viewSubtopicInput, setViewSubtopicInput] = useState(false);
  const [focus, setFocus] = useState(false);
  const [dummySubtopics, setDummySubTopics] = useState([]);

  let topics = [
    { topic: "Activism", selected: true },
    { topic: "Sports", selected: false },
    { topic: "Anime", selected: false },
    { topic: "Pla", selected: false },
    { topic: "Plapla", selected: false },
    { topic: "Haha", selected: false },
    { topic: "Good", selected: false },
  ];

  //useEffect();

  function subtopicHandler(event) {
    setSubtopic(event.target.value);
  }

  function DropItemHandle(event) {
    setTopic(event.target.innerText);
    setViewTopics(false);
  }

  function viewHandle() {
    setViewTopics((prev) => !prev);
  }

  function blurHandle(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setViewTopics(false);
    }
  }

  function viewSubtopicInputHandler() {
    setViewSubtopicInput(true);
  }

  function clickSubtopicHandler(event) {
    const index = subtopics.findIndex((element) => {
      return element.toLowerCase() === event.target.innerText.toLowerCase();
    });
    if (index === -1) {
      setDummySubTopics((prev) => {
        return [...prev, event.target.innerText];
      });
      setSubtopics((prev) => {
        return [...prev, event.target.innerText];
      });
    }
    setViewSubtopicInput(true);
    setFocus(true);
  }

  function enterSubtopicHandler(event) {
    if (event.key === "Enter") {
      const index = subtopics.findIndex((element) => {
        return element.toLowerCase() === event.target.value.toLowerCase();
      });
      if (index === -1) {
        setDummySubTopics((prev) => {
          return [...prev, event.target.value];
        });
        setSubtopics((prev) => {
          return [...prev, event.target.value];
        });
      }
      console.log(dummySubtopics);
      setSubtopic("");
      setFocus(true);
    }
  }

  function cancelHandler() {
    dummySubtopics.forEach((element) => {
      setSubtopics((prev) => prev.filter((value) => value !== element));
    });
    setSubtopic("");
    setDummySubTopics([]);
    setFocus(false);
    setViewSubtopicInput(false);
  }

  function saveHandler() {
    setDummySubTopics([]);
    setFocus(false);
    setViewSubtopicInput(false);
  }

  function outsideHandler(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setFocus(false);
      setViewSubtopicInput(false);
    }
  }

  function blurFirstInputHandle(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setViewSubtopicInput(false);
      setFocus(false);
    }
  }

  const filteredTopics = topics.filter((topic) => {
    return topic.topic.toLowerCase().indexOf(subtopic.toLowerCase()) !== -1;
  });

  const TopicsBlock = (props) => {
    return (
      <DropDown onBlur={blurHandle} tabIndex={0}>
        {props.data.map((element) => {
          return (
            <DropDownItem
              text={element.topic}
              selected={element.selected}
              clickHandle={DropItemHandle}
              weight={500}
            />
          );
        })}
      </DropDown>
    );
  };

  const DropDownItem = ({ text, selected, clickHandle, weight }) => {
    return (
      <DropDownBtn
        className={selected ? "active" : ""}
        onClick={clickHandle}
        selected={selected}
        weight={weight}
      >
        {text}
        {selected && (
          <span>
            <BsCheck />
          </span>
        )}
      </DropDownBtn>
    );
  };

  const SubtopicItem = (props) => {
    return <ItemContainer>{props.text}</ItemContainer>;
  };
  const SubtopicsContent = (props) => {
    return (
      <SubtopicsContainer
        onClick={() => {
          setFocus(true);
        }}
        // onBlur={outsideHandler}
        focus={focus}
      >
        {subtopics.map((topic) => {
          return <SubtopicItem text={topic} />;
        })}
        {!focus && (
          <span className="icon">
            <HiOutlinePencil />
          </span>
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

  const SubtopicBlock = () => {
    return (
      <TopicsBlockHandle className="topics-block-handle">
        <SuggestedTopicsContainer>
          <div className="suggested-container">
            {!filteredTopics && <h3>Suggested topics</h3>}
            {filteredTopics.map((element) => {
              return (
                <DropDownItem
                  text={element.topic}
                  selected={false}
                  weight={400}
                  clickHandle={clickSubtopicHandler}
                />
              );
            })}
            {subtopic.length !== 0 && (
              <div className="add" tabIndex="0" >
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
      <CommunityTopic>
        {!topic && <span className="new">New</span>}
        Community topics
        <span className="topic-icon">
          <AiOutlineInfoCircle />
        </span>
      </CommunityTopic>
      <AddTopic onBlur={blurHandle}>
        <AddTopicBtn onClick={viewHandle}>
          <span>{topic || "Add a Primary Topic"}</span>
          <span className="icon">
            <RiArrowDownSLine />
          </span>
        </AddTopicBtn>
        {viewTopics && <TopicsBlock data={topics} />}
      </AddTopic>
      {topic && (
        <AddSubTopicContainer onBlur={blurFirstInputHandle}>
          {subtopics.length === 0 && !viewSubtopicInput && (
            <AddSubTopic onClick={viewSubtopicInputHandler}>
              <span className="icon">
                <FaPlus />
              </span>
              Add subtopics
            </AddSubTopic>
          )}
          {subtopics.length > 0 && <SubtopicsContent />}
          {viewSubtopicInput && subtopics.length === 0 && (
            <InputSubTopic>
              <InputSubTopicContainer>
                <input
                  autoFocus
                  type="text"
                  maxLength={64}
                  value={subtopic}
                  onChange={subtopicHandler}
                  onKeyDown={enterSubtopicHandler}
                  onFocus={() => setViewSubtopicInput(true)}
                />
                <SubtopicBlock />
              </InputSubTopicContainer>
            </InputSubTopic>
          )}

          {(viewSubtopicInput || focus) && (
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
    </Container>
  );
};

export default CommunityTopics;
