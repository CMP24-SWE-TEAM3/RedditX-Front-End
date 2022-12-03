import profile from "Features/Post/Assets/Images/Post-guidelines.png";
import { useState, useEffect } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import FlairModal from "../FlairModal/FlairModal";
import {
  Container,
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

// API services
import getPostFlairs from "Features/Post/Services/getFlairs";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";

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

  // const [flairs, error, isLoading, reload] = useFetch({
  //   axiosInstance: axios,
  //   method: "GET",
  //   url: "/flairs/",
  //   requestConfig: {
  //     headers: {
  //       "Content-Language": "en-US",
  //     },
  //   },
  // });
  // Fetch flairs
  const auth = useAuth();
  let [flairs, error, isLoading, fetchData] = useFetchFunction();
  useEffect(() => {
    getPostFlairs(fetchData, auth);
  }, []);
  // TODO: Remove this statement
  flairs = [
    {
      id: "t7_63248d012f459a937e2684fd",
      text: "Flair 1 text",
      flairBackGroundColor: "rgb(70, 209, 96)",
      flairTextColor: "rgb(255, 255, 255)",
      modOnly: true,
      allowUserEdits: true,
    },
    {
      id: "t7_63248d012f459a937e1223123d",
      text: "Flair 2 text",
      flairBackGroundColor: "blue",
      flairTextColor: "rgb(255, 255, 255)",
      modOnly: true,
      allowUserEdits: true,
    },
    {
      id: "t1_632012f459a937e1223123d",
      text: "Flair 3 text",
      flairBackGroundColor: "red",
      flairTextColor: "rgb(70, 209, 96)",
      modOnly: true,
      allowUserEdits: true,
    },
  ];
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
