// Imports
import { useState, useEffect } from "react";
import { BASE_URL } from "API/axios";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import joinCommunity from "Services/joinCommunity";
import getCommunities from "Services/getCommunities";
import {
  Caret,
  CommunityNameChild,
  CommunityNameContainer,
  Container,
  HeaderLine,
  Image,
  Item,
  JoinBtn,
  JoinContainer,
  Number,
} from "./CommunityCardItem.styled";
import { Link } from "react-router-dom";
import { FaAngleUp } from "react-icons/fa";

/**
 * Component that  shows random categories
 * @returns {Component.React}
 */
const CommunityCardItem = ({ communityId, communityUserName, srIcon }) => {
  // states
  const [btnContent, setBtnContent] = useState("");
  const [currentState, setCurrentState] = useState(null);
  // useFetchFunction
  const [subscribed, errorCommunities, loadingCommunities, fetchCommunities] =
    useFetchFunction();

  const [joiningResponse, errorJoining, loadingJoining, fetchData] =
    useFetchFunction();

  // authorization
  const auth = useAuth();

  // joined communities or unjonined
  const handleJoining = (communityName, type) => {
    joinCommunity(fetchData, auth, {
      action: type === "Leave" ? "unsub" : "sub",
      srName: communityName,
    });
  };

  // handle fetch joined communities
  useEffect(() => {
    getCommunities(fetchCommunities, auth);
  }, []);

  // handle fetch joined communities
  useEffect(() => {
    if (subscribed && subscribed.communities) {
      setCurrentState(
        subscribed.communities.find(({ _id }) => _id === communityUserName)
      );
      if (currentState !== undefined) {
        setBtnContent("Joined");
      } else setBtnContent("Join");
    }
  }, [subscribed, currentState]);

  // handle unjoined communities
  const clickHandler = () => {
    if (btnContent === "Join") setBtnContent("Joined");
    else setBtnContent("Join");
    handleJoining(communityUserName, btnContent);
  };
  // handle hover joined communities
  const mouseEnterHandler = () => {
    if (btnContent === "Joined") {
      setBtnContent("Leave");
    }
  };

  // hover leaved communities
  const mouseLeaveHandler = () => {
    if (btnContent === "Leave") {
      setBtnContent("Joined");
    }
  };

  return (
    <>
      <Container>
        <Link to={`subreddit/${communityUserName}`}>
          <Item>
            <Number>{communityId}</Number>
            <Caret>
              <FaAngleUp />
            </Caret>
            {srIcon && (
              <Image
                crossOrigin="anonymous"
                src={`${BASE_URL}/subreddits/files/${srIcon}`}
                alt="community-icon"
              />
            )}
            <CommunityNameContainer>
              <CommunityNameChild>
                <h6>r/{communityUserName.substring(3)}</h6>
              </CommunityNameChild>
            </CommunityNameContainer>
            <JoinContainer>
              <JoinBtn
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  clickHandler();
                }}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                {btnContent}
              </JoinBtn>
            </JoinContainer>
          </Item>
        </Link>
      </Container>
      {communityId < 4 && <HeaderLine />}
    </>
  );
};

export default CommunityCardItem;
