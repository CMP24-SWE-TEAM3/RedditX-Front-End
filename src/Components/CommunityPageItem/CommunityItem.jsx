import {
  BtnJoin,
  CommContainer,
  CommContent,
  CommImage,
  CommunityName,
  Discrepion,
  MemContent,
  MemLayout,
  Visit,
} from "./CommunityItem.styled";
// import logo from ".././../.././Search/Assets/download.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "API/axios";
// import CommImage from "../../Assets/CommunityImage.png";
import useFetchFunction from "Hooks/useFetchFunction";
import useFetch from "Hooks/useFetch";
import joinCommunity from "Features/Search/Services/joinCommunity";
import { useEffect } from "react";
const CommunityItem = ({
  communityIcon,
  communityDescription,
  membersCount,
  communityName,
  communityID,
  isJoined,
}) => {
  console.log(communityIcon, communityDescription, membersCount, communityID);
  const [joinRes, errorJoin, joinLoading, fetchFunction] = useFetchFunction();
  const [isJoinedstate, setisJoined] = useState(false);

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
    let dataObj = {
      action: !btnState ? "unsub" : "sub",
      sr_name: `${communityName}`,
    };
    joinCommunity(fetchFunction, dataObj);
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
  var abbreviate = require("number-abbreviate");
  return (
    <CommContainer title="comm">
      {communityIcon && (
        <CommImage
          alt="Community image"
          crossOrigin="anonynmous"
          src={`https://api.redditswe22.tech/subreddits/files/${communityIcon}`}
        />
      )}
      <CommContent>
        {communityID && (
          <Link to={`/subreddit/${communityID}`}>
            {communityName && (
              <CommunityName>r/{communityName.substring(3)}</CommunityName>
            )}
            {membersCount && (
              <MemLayout>
                <MemContent>{abbreviate(membersCount, 1)} Members</MemContent>
              </MemLayout>
            )}
          </Link>
        )}
        {communityDescription && (
          <Discrepion>{communityDescription}</Discrepion>
        )}
        {<Visit to={`/subreddit/${communityID}`}>Visit</Visit>}
      </CommContent>
      <BtnJoin
        onClick={clickHandler}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={MouseLeaveHandler}
        active={
          btnContent === "Joined" || btnContent === "Leave" ? true : false
        }
      >
        {btnContent}
      </BtnJoin>
    </CommContainer>
  );
};

export default CommunityItem;
