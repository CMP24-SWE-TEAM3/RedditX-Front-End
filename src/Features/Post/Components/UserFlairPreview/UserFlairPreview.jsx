import profile from "Features/Post/Assets/Images/Post-guidelines.png";
import { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { Separator } from "../CommunityCard/CommunityCard.styled";
import FlairModal from "../FlairModal/FlairModal";
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
  UserFlairContainer,
} from "./UserFlairPreview.styled";

// Import api
import axios from "API/axios";
import useFetch from "Hooks/useFetch";

/**
 * component that preview your subreddit flair
 *
 * @returns {React.Component} CreatePost component
 */
const UserFlairPreview = () => {
  //state to show modal
  const [modalShow, setModalShow] = useState(false);

  // State for selected flair index
  const [flairIndex, setFlairIndex] = useState(null);
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
  function changeFlair(index) {
    setModalShow(false);
    setFlairIndex(index);
  }

  // Fetch flairs
  const [flairs, error, isLoading, reload] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "/flairs/",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
  console.log(flairs);
  console.log(flairIndex);
  /**
   *
   * @returns {React.Component} CreatePost component
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
                {flairIndex !== null && (
                  <Flair
                    style={{
                      color: flairs[flairIndex].flairTextColor,
                      backgroundColor: flairs[flairIndex].flairBackGroundColor,
                    }}
                  >
                    {flairs[flairIndex].text}
                  </Flair>
                )}
              </FlairContainer>
            </NameAndFlairContainer>
          </DataContainer>
        </UserFlairContainer>
      </PreviewContainer>
    );
  };

  return (
    <Container>
      {/* dynamic display cuz if there is no display */}
      <Preview />
      <FlairModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        flairList={flairs}
        flairIndex={flairIndex}
        setFlairIndex={setFlairIndex}
        error={error}
        isLoading={isLoading}
        postOrUser={"user"}
      />
    </Container>
  );
};

export default UserFlairPreview;
