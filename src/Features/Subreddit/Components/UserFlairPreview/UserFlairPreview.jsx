import profile from "Features/Subreddit/Assets/index.jpeg";
import { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { Separator } from "../CommunityCard/CommunityCard.styled";
import SelectYourFlair from "../SelectYourFlair/SelectYourFlair";
import {
  Container,
  CreatePost,
  DataContainer,
  Flair,
  FlairContainer,
  FlairPreview,
  Name,
  NameAndFlairContainer,
  PreviewContainer,
  ProfilePic,
  ProfilePicContainer,
  UserFlairContainer
} from "./UserFlairPreview.styled";

/**
 * component that preview your subreddit flair
 * 
 * @returns {React.Component}
 */
const UserFlairPreview = () => {
  // const flair = { text: "", backgroundColor: "", color: "" };
  const [flair, setFlair] = useState({
    text: "hi",
    color: "white",
    backgroundColor: "#000",
  });
  //state to show modal
  const [modalShow, setModalShow] = useState(false);

  /**
   * handler on click on pen handler
   */
  function clickPenHandler() {
    setModalShow(true);
  }
  
  /**
   * handler when click save on flair modal that takes new flair selected 
   * 
   * @param {object} flair 
   */
  function changeFlair(flair) {
    setModalShow(false);
    setFlair(flair);
  }

  /**
   * component preview your flair in this subreddit
   * 
   * @returns {React.Component} 
   */
  const Preview = () => {
    return (
      <PreviewContainer>
        <FlairPreview>
          user flair preview
          <button onClick={clickPenHandler}>
            <span className="icon">
              <HiOutlinePencil />
            </span>
          </button>
        </FlairPreview>
        <UserFlairContainer>
          <DataContainer>
            <ProfilePicContainer>
              <ProfilePic profile={profile} />
            </ProfilePicContainer>
            <NameAndFlairContainer>
              <Name>
                <span>user name</span>
              </Name>
              <FlairContainer>
                <Flair
                  style={{
                    color: flair.color,
                    backgroundColor: flair.backgroundColor,
                  }}
                >
                  {flair.text}
                </Flair>
              </FlairContainer>
            </NameAndFlairContainer>
          </DataContainer>
        </UserFlairContainer>
      </PreviewContainer>
    );
  };

  return (
    <Container>
      <CreatePost to="/submit/" className="create-post">Create Post</CreatePost>
      {/* dynamic display cuz if there is no display */}
      {true && <Separator />}
      {true && <Preview />}
      <SelectYourFlair
        modalShow={modalShow}
        hide={() => setModalShow(false)}
        onApply={changeFlair}
      />
    </Container>
  );
};

export default UserFlairPreview;
