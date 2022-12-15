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
const UserFlairPreview = ({ flairList }) => {
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

  // Fetch flairs
  const auth = useAuth();
  let [flairs, error, isLoading, fetchData] = useFetchFunction();
  useEffect(() => {
    getPostFlairs(fetchData, auth);
  }, []);
  // TODO: Remove this statement
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
                <span>{auth.getUserName().substring(3)}</span>
              </Name>
              <FlairContainer>
                {flairIndex !== null && (
                  <Flair
                    style={{
                      color: flairList[flairIndex].flairTextColor,
                      backgroundColor:
                        flairList[flairIndex].flairBackGroundColor,
                    }}
                  >
                    {flairList[flairIndex].text}
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
