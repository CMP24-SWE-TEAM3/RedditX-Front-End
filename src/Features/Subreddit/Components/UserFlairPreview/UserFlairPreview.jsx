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

const UserFlairPreview = (props) => {
  // const flair = { text: "", backgroundColor: "", color: "" };
  const [flair, setFlair] = useState({
    text: "hii",
    color: "white",
    backgroundColor: "#000",
  });
  const [modalShow, setModalShow] = useState(false);

  function clickPenHandler() {
    setModalShow(true);
  }
  function changeFlair(e) {
    setModalShow(false);
    setFlair(e);
  }

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
      <CreatePost to="#">Create Post</CreatePost>
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
