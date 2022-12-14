import profile from "Features/Subreddit/Assets/index.jpeg";
import { useIsBanned } from "Features/Subreddit/Contexts/IsBannedProvider";
import { useIsMuted } from "Features/Subreddit/Contexts/IsMutedProvider";
import { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { Separator } from "../CommunityCard/CommunityCard.styled";
import SelectYourFlair from "../SelectYourFlair/SelectYourFlair";
import RequestMods from "../RequestMods/RequestMods";
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
  RequestPostButton,
  UserFlairContainer,
} from "./UserFlairPreview.styled";

/**
 * component that preview your subreddit flair
 *
 * @returns {React.Component}
 */
const UserFlairPreview = () => {
  const [showModal, setShowModal] = useState(false);

  const { isBanned } = useIsBanned();
  const { isMuted } = useIsMuted();

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

  function ReqPostHandler() {
    setShowModal(true);
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
      {!isBanned && !isMuted && (
        <CreatePost to="/submit/" className="create-post">
          Create Post
        </CreatePost>
      )}
      {!isBanned && isMuted && (
        <RequestPostButton onClick={ReqPostHandler}>
          Request to Post
        </RequestPostButton>
      )}
      {/* dynamic display cuz if there is no display */}
      {true && <Separator />}
      {true && <Preview />}
      <SelectYourFlair
        modalShow={modalShow}
        hide={() => setModalShow(false)}
        onApply={changeFlair}
      />
      <RequestMods
        modalShow={showModal}
        hide={() => setShowModal(false)}
        isPriv={false}
      />
    </Container>
  );
};

export default UserFlairPreview;
