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
const CommunityCardItem = ({
  communityId,
  communityUserName,
  srIcon,
  community,
}) => {
  // states
  const [btnContent, setBtnContent] = useState("Join");
  const [currentState, setCurrentState] = useState(null);
  // useFetchFunction
  const [subscribed, errorCommunities, loadingCommunities, fetchCommunities] =
    useFetchFunction();

  const [joiningResponse, errorJoining, loadingJoining, fetchData] =
    useFetchFunction();

  // authorization
  const auth = useAuth();

  // joined communities or unjonined
  const handleJoining = ({ event, communityName, type }) => {
    event.preventDefault();
    joinCommunity(fetchData, auth, {
      action: type === "joined" ? "sub" : "unsub",
      srName: `t5_${communityName}`,
    });
  };

  // handle fetch joined communities
  useEffect(() => {
    getCommunities(fetchCommunities, auth);
  }, []);

  // handle unjoined communities
  const clickHandler = (e) => {
    e.preventDefault();
    if (currentState !== undefined) {
      setBtnContent("Joined");
    } else {
      setBtnContent("Join");
    }
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
        <Link to={community}>
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
                <h6>r/{communityUserName}</h6>
              </CommunityNameChild>
            </CommunityNameContainer>
            <JoinContainer>
              <JoinBtn
                onClick={() => {
                  clickHandler();
                  handleJoining(communityUserName, btnContent);
                }}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                {subscribed.length !== 0 &&
                  subscribed.communities.find(({ _id }) =>
                    setCurrentState(_id.substring(3) === communityUserName)
                  ) &&
                  btnContent}
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
