import { useState, useEffect } from "react";
import {
  BtnContainer,
  Button,
  CommunityDescription,
  CommunityInfo,
  CommunityMainInfo,
  CommunityMembers,
  CommunityTitle,
  Container,
  Flex,
  Img,
} from "./CommunityItem.styled";

// Import api
import axios from "API/axios";
// import CommImage from "../../Assets/CommunityImage.png";
import useFetchFunction from "Hooks/useFetchFunction";
import useFetch from "Hooks/useFetch";

/**
 * Component that render the Community item Elements.
 *
 * @Component
 * @param {String} communityIcon - The image of the CommunityCardItem
 * @param {String} communityID - The ID of the CommunityCardItem
 * @param {String} communityDescription - The Description of the CommunityCardItem
 * @param {number} membersCount - The membersCount of the CommunityCardItem
 * @param {String} communityName - The name of the CommunityCardItem
 * @param {object} isJoined - it is object indicating whether the user is joining this community
 * @returns {React.Component}
 */
const CommunityItem = ({
  communityIcon,
  communityDescription,
  membersCount,
  communityName,
  communityID,
  isJoined,
}) => {
  const [joinRes, errorJoin, joinLoading, fetchFunction] = useFetchFunction();
  const [isJoinedstate, setisJoined] = useState(false);
  const joinCommunity = (btnState) => {
    fetchFunction({
      axiosInstance: axios,
      method: "POST",
      url: "http://localhost:8000/Join",
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
        },
        data: {
          action: !btnState ? "unsub" : "sub",
          sr_name: `${communityName}`,
        },
      },
    });
  };

  // the initialState of operations of join
  const initialState = `${isJoined !== undefined ? "Joined" : "Join"}`;
  // the state of the buuton
  const [btnContent, setBtnContent] = useState(
    isJoined !== undefined ? "Joined" : "Join"
  );
  useEffect(() => {
    setBtnContent(initialState);
  }, [initialState]);
  // console.log("first", btnContent);
  /**
   * it is the function that handle the state of the button when click on it.
   *
   * @param {Object} e it is an object which i can preventDefault and not redirect to the link
   */
  const clickHandler = (e) => {
    e.preventDefault();
    if (btnContent === "Join") {
      setBtnContent("Joined");
      setisJoined(true);
    } else {
      setBtnContent("Join");
      setisJoined(false);
    }
    let btnState;
    if (btnContent === "Join") {
      btnState = true;
    } else {
      btnState = false;
    }
    joinCommunity(btnState);
  };
  /**
   * it is the function that handle the state of the button when mouseEnter on it.
   *
   */
  function mouseEnterHandler() {
    if (btnContent === "Joined") {
      setBtnContent("Leave");
    }
  }
  /**
   * it is the function that handle the state of the button when MouseLeave on it.
   *
   */
  function MouseLeaveHandler() {
    if (btnContent === "Leave") {
      setBtnContent("Joined");
    }
  }
  // console.log(CommunitiesSub2);
  return (
    <Container href="#">
      <Flex>
        <Img
          src={require(`../../Assets/${communityIcon}`)}
          alt="Subreddit Icon"
        />
        <CommunityInfo>
          <CommunityMainInfo>
            <CommunityTitle className="community-name">
              r/{communityName}
            </CommunityTitle>
            <CommunityMembers>
              <span>•</span>
              {membersCount}k Members
            </CommunityMembers>
          </CommunityMainInfo>
          <CommunityDescription>{communityDescription}</CommunityDescription>
        </CommunityInfo>
        <BtnContainer>
          <Button
            onClick={clickHandler}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={MouseLeaveHandler}
            className="join"
          >
            {btnContent}
          </Button>
        </BtnContainer>
      </Flex>
    </Container>
  );
};

export default CommunityItem;
