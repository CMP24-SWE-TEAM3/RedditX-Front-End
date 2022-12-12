/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";

import { AiOutlineClose } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { VscEye } from "react-icons/vsc";
import { HiLockClosed } from "react-icons/hi";
import { CgDanger } from "react-icons/cg";

import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

//import css module
import "react-languages-select/css/react-languages-select.css";

import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";

import {
  Container,
  ButtonsContainer,
  ButtonTwo,
  NameHeader,
  InnerContainer,
  CommuintyProfile,
  SearchContainer,
  SearchInput,
  Par,
  TopicsContainer,
  SelectedTopics,
  TopicInput,
  AddTopic,
  Content,
  Close,
  TextArea,
  MySwitch,
  WelcomeContainer,
  WelcomeOne,
  WelcomeTwo,
  MyLanguage,
  RegionContainer,
  MyCountry,
  MyRegion,
  CheckFormContainer,
  FormCheckContainer,
  LabelForm,
  Ico,
  FormCheckLabel,
  Adult,
  AdultCheck,
  NSFW,
} from "./CommunitySettingsPage.styled";

const defaultFormFields = {
  communityName: "Eln2aa4yn",
  topicToAdd: "",
  reason: "Hello to Community description",
  welcome: "Welcome message",
};

/**
 * CommunitySettingsPage Layout that is used in Community settings
 * @returns {React.Component}  CommunitySettingsPage Layout that is used in Community settings
 */

const CommunitySettingsPage = ({ setModalShowBaneUser }) => {
  //const communityName = "t5_imagePro235";

  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const auth = useAuth();



  /**
   * state to know the lenght of the reason text area
   */
  const [reasonLength, setReasonLength] = useState(0);

  /**
   * state to know the lenght of the reason text area
   */
  const [welcomeLength, setWelcomeLength] = useState(0);

  /**
   * state to handel any change the user make in the input fields
   */
  const [formFields, setFormFields] = useState(defaultFormFields);

  /**
   * state to handel show of add topics
   */
  const [showTopics, setShowTopics] = useState(false);

  /**
   * state to handel show of add topics
   */
  const [sendWelcome, setSendWelcome] = useState(true);

  /**
   * state to handel adult content
   */
  const [adultContent, setAdultContent] = useState(false);

  /**
   * state to handel accept request
   */
  const [acceptReq, setAcceptReq] = useState(false);

  /**
   * state to handel show of add topics
   */
  const [addedTopics, setAddedTopics] = useState([]);

  /**
   * state to handel country
   */
  const [country, setCountry] = useState();

  /**
   * state to handel region
   */
  const [region, setRegion] = useState();

  // state store type of community
  const [currentRadioValue, setCurrentRadioValue] = useState("public");

  const { communityName, topicToAdd, reason, welcome } = formFields;

  /**
   * useEffect for reason field to check the lenght of the reason
   */
  useEffect(() => {
    setReasonLength(reason.length);
  }, [reason]);
  /**
   * useEffect for welcom field to check the lenght of the welcome
   */
  useEffect(() => {
    setWelcomeLength(welcome.length);
  }, [welcome]);

  /**
   * useEffect to get all moderators
   */
  useEffect(() => {
    // getBanned(dataFetch, communityName, auth.getToken());
  }, []);

  /**
   * Function to handle any change on the input field
   * @param {*} event
   */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  /**
   * Function to add topic to the list
   * @param {String} topic topic to add
   */
  const handleAddTopic = (topic) => {
    let temp = addedTopics;
    temp.push(topic);
    setAddedTopics(temp);
    setFormFields(defaultFormFields);
  };

  /**
   * Function to add topic to the list
   * @param {String} topic topic to remove
   */
  const handleRemoveTopic = (topic) => {
    const temp = addedTopics.filter((mod) => {
      return !mod.includes(topic);
    });
    setAddedTopics(temp);
    setFormFields(defaultFormFields);
  };

  return (
    <>
      <Container>
        <ButtonsContainer>
          <ButtonTwo
            onClick={() => {
              setModalShowBaneUser(true);
            }}
          >
            Save changes
          </ButtonTwo>
        </ButtonsContainer>
        <InnerContainer>
          <NameHeader>Community settings</NameHeader>
          <CommuintyProfile>COMMUNITY PROFILE</CommuintyProfile>
          <hr />
          <NameHeader small={true}>Community name</NameHeader>
          <SearchContainer>
            <SearchInput
              name="communityName"
              value={communityName}
              onChange={handleChange}
            ></SearchInput>
          </SearchContainer>
          <br></br>
          <NameHeader small={true}>Community topics</NameHeader>
          <Par>
            This will help Reddit recommend your community to relevant users and
            other discovery experiences.
          </Par>
          <TopicsContainer>
            <SelectedTopics>
              {addedTopics.map((topic) => (
                <p>
                  {topic}{" "}
                  <AiOutlineClose
                    onClick={() => {
                      handleRemoveTopic(topic);
                    }}
                  />
                </p>
              ))}
            </SelectedTopics>
            <TopicInput
              onFocus={() => {
                setShowTopics(true);
              }}
              noBorder={true}
              name="topicToAdd"
              value={topicToAdd}
              onChange={handleChange}
            ></TopicInput>
          </TopicsContainer>
          {showTopics && topicToAdd.length !== 0 && (
            <AddTopic>
              <Content
                onClick={() => {
                  handleAddTopic(topicToAdd);
                }}
              >
                Add {topicToAdd}
              </Content>
              <Close
                onClick={() => {
                  setShowTopics(false);
                }}
              >
                close
              </Close>
            </AddTopic>
          )}
          <br />
          <NameHeader small={true}>Community description</NameHeader>
          <Par>This is how new members come to understand your community.</Par>
          <TextArea
            rows="10"
            name="reason"
            value={reason}
            onChange={handleChange}
          ></TextArea>
          <Par fullWidth={true}>{5000 - reasonLength} Characters remaining</Par>
          <WelcomeContainer>
            <WelcomeOne>
              <NameHeader small={true}>
                Send welcome message to new members
              </NameHeader>
              <Par>
                Create a custom welcome message to greet people the instant they
                join your community. New community members will see this in a
                direct message 1 hour after joining.{" "}
              </Par>
            </WelcomeOne>
            <WelcomeTwo>
              <MySwitch>
                <Form.Check
                  checked={sendWelcome}
                  onClick={() => {
                    setSendWelcome(!sendWelcome);
                  }}
                  type="switch"
                  id="custom-switch"
                />{" "}
              </MySwitch>
            </WelcomeTwo>
          </WelcomeContainer>
          <TextArea
            rows="10"
            name="welcome"
            value={welcome}
            onChange={handleChange}
          ></TextArea>
          <Par fullWidth={true}>
            {5000 - welcomeLength} Characters remaining
          </Par>
          <br />
          <CommuintyProfile>
            COMMUNITY LOCATION AND MAIN LANGUAGE
          </CommuintyProfile>
          <hr />
          <Par>
            Adding a location helps your community show up in search results and
            recommendations and helps local redditors find it easier.
          </Par>
          <br />
          <NameHeader small={true}>Language</NameHeader>
          <MyLanguage />
          <br />
          <br />
          <NameHeader small={true}>
            Region <HiLocationMarker />
          </NameHeader>
          <RegionContainer>
            <MyCountry value={country} onChange={(val) => setCountry(val)} />
            <MyRegion
              country={country}
              value={region}
              onChange={(val) => setRegion(val)}
            />
          </RegionContainer>
          <br />
          <CommuintyProfile>COMMUNITY TYPE</CommuintyProfile>
          <hr />
          <CheckFormContainer>
            <h6>Community type</h6>
            <FormCheckContainer>
              <input
                className="form-check-input"
                type="radio"
                name="radio-input"
                value="public"
                id="public"
                onChange={(e) => setCurrentRadioValue(e.target.value)}
                defaultChecked={currentRadioValue === "public"}
              />
              <LabelForm for="public">
                <Ico>
                  <BsFillPersonFill />
                </Ico>
                <FormCheckLabel for="public">Public</FormCheckLabel>
                <Content>
                  Anyone can view, post, and comment to this community
                </Content>
              </LabelForm>
            </FormCheckContainer>
            <FormCheckContainer>
              <input
                className="form-check-input"
                type="radio"
                value={"restricted"}
                aria-label={"checked"}
                name="radio-input"
                id="restricted"
                onChange={(e) => setCurrentRadioValue(e.target.value)}
                defaultChecked={currentRadioValue === "restricted"}
              />
              <LabelForm for="restricted">
                <Ico>
                  <VscEye />
                </Ico>
                <FormCheckLabel for="restricted">Restricted</FormCheckLabel>
                <Content>
                  Anyone can view this community, but only approved users can
                  post
                </Content>
              </LabelForm>
            </FormCheckContainer>
            <FormCheckContainer>
              <input
                className="form-check-input"
                type="radio"
                value="private"
                name="radio-input"
                id="private"
                onChange={(e) => setCurrentRadioValue(e.target.value)}
                defaultChecked={currentRadioValue === "private"}
              />
              <LabelForm for="private">
                <Ico>
                  <HiLockClosed />
                </Ico>
                <FormCheckLabel for="private">Private</FormCheckLabel>
                <Content>
                  Only approved users can view and submit to this community
                </Content>
              </LabelForm>
            </FormCheckContainer>
          </CheckFormContainer>

          <WelcomeContainer>
            <WelcomeOne>
              <AdultCheck>
                <FormCheckLabel for="nsfw">
                  18+ year old community
                </FormCheckLabel>
                <NSFW>NSFW</NSFW>
              </AdultCheck>
              <Par>
                When your community is marked as an 18+ community, users must be
                flagged as 18+ in their user settings
              </Par>
            </WelcomeOne>
            <MySwitch>
              <Form.Check
                checked={adultContent}
                onClick={() => {
                  setAdultContent(!adultContent);
                }}
                type="switch"
                id="custom-switch"
              />{" "}
            </MySwitch>
          </WelcomeContainer>
          <br />
          <CommuintyProfile>PRIVATE COMMUNITY SETTINGS</CommuintyProfile>
          <hr />
          <WelcomeContainer>
            <WelcomeOne>
              <NameHeader small={true}>
              Accepting requests to join
              </NameHeader>
              <Par>
              Display a button on your private subreddit that allows users to request to join. Users may still send your subreddit modmail whether this is on or off.
              </Par>
            </WelcomeOne>
            <WelcomeTwo>
              <MySwitch>
                <Form.Check
                  checked={acceptReq}
                  onClick={() => {
                    setAcceptReq(!acceptReq);
                  }}
                  type="switch"
                  id="custom-switch"
                />{" "}
              </MySwitch>
            </WelcomeTwo>
          </WelcomeContainer>
        </InnerContainer>
      </Container>
    </>
  );
};

export default CommunitySettingsPage;
