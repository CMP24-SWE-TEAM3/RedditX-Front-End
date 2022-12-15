/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";

import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

//import css module
import "react-languages-select/css/react-languages-select.css";

import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";

import {
  getCommunitySettings,
  updateSettings,
} from "Features/Moderator/Services/communitySettingsApi";

import {
  Container,
  ButtonsContainer,
  ButtonTwo,
  NameHeader,
  InnerContainer,
  CommuintyProfile,
  Par,
  MySwitch,
  WelcomeContainer,
  WelcomeOne,
  WelcomeTwo,
  FormCheckLabel,
  AdultCheck,
  NSFW,
  MyDropdown,
} from "./PostsAndCommentsPage.styled";

/**
 * PostsAndCommentsPage Layout that is used in Community settings
 * @returns {React.Component}  PostsAndCommentsPage Layout that is used in Community settings
 */

const PostsAndCommentsPage = ({ setModalShowBaneUser }) => {
  const communityName = "t5_imagePro235";

  const [data, error, isLoading, dataFetch] = useFetchFunction();
  const [data2, error2, isLoading2, dataFetch2] = useFetchFunction();

  const auth = useAuth();

  /**
   * state to handel spoiler
   */
  const [spoiler, setSpoiler] = useState(false);

  /**
   * state to handel allow images in comments
   */
  const [allowImages, setAllowImages] = useState(true);

  /**
   * state to know the selected value for suggest sort
   */
  const [selectSort, setSelectSort] = useState("None");

  // state to know if the data arrived or not
  const [signupSubmit, setSignupSubmit] = useState(false);

  /**
   * useEffect to get community settings
   */
  useEffect(() => {
    getCommunitySettings(dataFetch, communityName, auth.getToken());
    setSignupSubmit(true);
  }, []);

  useEffect(() => {
    if (signupSubmit) {
      setSignupSubmit(false);
      setSpoiler(data.enableSpoilerTag);
      setSelectSort(data.suggestedCommentSort);
    }

    console.log(data);
  }, [data]);

  const handleSelectSort = (sort) => {
    setSelectSort(sort);
  };

  /**
   * Function to handle the call of save api
   */
  const handleSaveSettings = () => {
    updateSettings(
      dataFetch2,
      {
        communityOptions: {
          enableSpoilerTag: spoiler,
          suggestedCommentSort: selectSort,
        },
      },
      communityName,
      auth.getToken()
    );
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}{" "}
      {!isLoading && (
        <Container>
          <ButtonsContainer>
            <ButtonTwo
              onClick={() => {
                handleSaveSettings();
              }}
            >
              Save changes
            </ButtonTwo>
          </ButtonsContainer>
          <InnerContainer>
            <NameHeader>Post and Comment settings</NameHeader>
            <CommuintyProfile>POSTS</CommuintyProfile>
            <hr />
            <WelcomeContainer>
              <WelcomeOne>
                <AdultCheck>
                  <FormCheckLabel for="nsfw">Enable spoiler tag</FormCheckLabel>
                  <NSFW>SPOILER</NSFW>
                </AdultCheck>
                <Par>Media on posts with the spoiler tag are blurred</Par>
              </WelcomeOne>
              <MySwitch>
                <Form.Check
                  checked={spoiler}
                  onClick={() => {
                    setSpoiler(!spoiler);
                  }}
                  type="switch"
                  id="custom-switch"
                />{" "}
              </MySwitch>
            </WelcomeContainer>
            <br />
            <CommuintyProfile>COMMENTS</CommuintyProfile>
            <hr />
            <WelcomeContainer>
              <WelcomeOne>
                <NameHeader small={true}>Suggested sort</NameHeader>
                <Par>
                  All comment feeds in community will default to this sort
                  setting
                </Par>
              </WelcomeOne>
              <WelcomeTwo>
                <MyDropdown>
                  <MyDropdown.Toggle variant="success" id="dropdown-basic">
                    {selectSort[0].toUpperCase() + selectSort.substring(1)}
                  </MyDropdown.Toggle>

                  <MyDropdown.Menu>
                    <MyDropdown.Item
                      onClick={() => {
                        handleSelectSort("none");
                      }}
                    >
                      None(Recommended)
                    </MyDropdown.Item>
                    <MyDropdown.Item
                      onClick={() => {
                        handleSelectSort("best");
                      }}
                    >
                      Best
                    </MyDropdown.Item>
                    <MyDropdown.Item
                      onClick={() => {
                        handleSelectSort("old");
                      }}
                    >
                      Old
                    </MyDropdown.Item>
                    <MyDropdown.Item
                      onClick={() => {
                        handleSelectSort("top");
                      }}
                    >
                      Top
                    </MyDropdown.Item>
                    <MyDropdown.Item
                      onClick={() => {
                        handleSelectSort("Q&A");
                      }}
                    >
                      Q&A
                    </MyDropdown.Item>
                    <MyDropdown.Item
                      onClick={() => {
                        handleSelectSort("live");
                      }}
                    >
                      Live (Beta)
                    </MyDropdown.Item>
                    <MyDropdown.Item
                      onClick={() => {
                        handleSelectSort("controversial");
                      }}
                    >
                      Controversial
                    </MyDropdown.Item>
                    <MyDropdown.Item
                      onClick={() => {
                        handleSelectSort("new");
                      }}
                    >
                      New
                    </MyDropdown.Item>
                  </MyDropdown.Menu>
                </MyDropdown>
              </WelcomeTwo>
            </WelcomeContainer>
            <br />
            <NameHeader small={true}>Media in comments</NameHeader>
            <br />
            <WelcomeContainer addPadding={true}>
              <WelcomeOne>
                <NameHeader small={true}>Images</NameHeader>
                <Par>Allow comments with uploaded images.</Par>
              </WelcomeOne>
              <WelcomeTwo>
                <MySwitch>
                  <Form.Check
                    checked={allowImages}
                    onClick={() => {
                      setAllowImages(!allowImages);
                    }}
                    type="switch"
                    id="custom-switch"
                  />{" "}
                </MySwitch>
              </WelcomeTwo>
            </WelcomeContainer>
          </InnerContainer>
        </Container>
      )}
    </>
  );
};

export default PostsAndCommentsPage;
