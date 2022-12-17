import { StyledButton } from "./Button.styled";
import { useState, useEffect } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import joinCommunity from "Services/joinCommunity";
import getCommunities from "Services/getCommunities";
import { useSubRedditID } from "Features/Subreddit/Contexts/SubRedditIDProvider";
/**
 *
 * @param {boolean} isJoined - boolean if joined community or not
 * @param {function} onJoin - function receive state of joining
 * @returns {React.Component} Join button
 */
const Button = ({ isJoined, onJoin }) => {
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
  const { communityID } = useSubRedditID();

  // joined communities or unjonined
  const handleJoining = (type) => {
    joinCommunity(fetchData, auth, {
      action: type === "Leave" ? "unsub" : "sub",
      srName: communityID,
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
        subscribed.communities.find(({ _id }) => _id === communityID)
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
    handleJoining(btnContent);
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
    <StyledButton joined={btnContent !== "Join"}>
      <div className="width">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            clickHandler();
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="join"
        >
          {btnContent}
        </button>
      </div>
    </StyledButton>
  );
};

export default Button;
