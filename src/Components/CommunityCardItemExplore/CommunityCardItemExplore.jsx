import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Features/Search/Assets/CommunityImage.png";
// import { Container, ContainerAlibash } from "./CommunityCardItem.styled";
// Import api
import axios from "API/axios";
import useFetchFunction from "Hooks/useFetchFunction";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../Assets/download.jpg";
// import { Container } from "./CommunityCardItem.styled";
// Import api
// import axios from "API/axios";
// import useFetchFunction from "Hooks/useFetchFunction";
import joinCommunity from "Features/Search/Services/joinCommunity";
import { ContainerAlibash } from "./CommunityCardItemExplore.styled";
/**
 * Component that contains the CommunityCardItem and manage the state of the button join.
 *
 * @Component
 * @param {String} communityIcon - The image of the CommunityCardItem
 * @param {String} communityID - The ID of the CommunityCardItem
 * @param {String} communityDescription - The Description of the CommunityCardItem
 * @param {number} membersCount - The membersCount of the CommunityCardItem
 * @param {String} communityName - The name of the CommunityCardItem
 * @returns {React.Component}
 */
const CommunityCardItem = ({
  communityIcon,
  communityID,
  communityDescription,
  communityName,
  membersCount,
  isJoined,
}) => {
  const [joinRes, errorJoin, joinLoading, fetchFunction] = useFetchFunction();
  const [isJoinedstate, setisJoined] = useState(false);

  const initialState = `${isJoined !== undefined ? "Joined" : "Join"}`;
  // the state of the buuton
  const [btnContent, setBtnContent] = useState(
    isJoined !== undefined ? "Joined" : "Join"
  );

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
  var abbreviate = require("number-abbreviate");
  // console.log(communityIcon);
  return (
    <ContainerAlibash title="comm">
      {/* <Link href="#">
        <div className="item">
          <img src={logo} alt="" />
          <div className="info">
            <div className="info2">
              <div>r/{communityName}</div>
              <p>{membersCount}m Members</p>
            </div>
          </div>
          <div className="button">
            <button
              onClick={clickHandler}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={MouseLeaveHandler}
            >
              {btnContent}
            </button>
          </div>
        </div>
      </Link> */}
      <Link to={`/subreddit/${communityID}`}>
        <div className="item">
          {communityIcon && (
            <img
              crossOrigin="anonynmous"
              src={`https://api.redditswe22.tech/subreddits/files/${communityIcon}`}
              alt=""
            />
          )}
          <div className="info">
            <div className="info2">
              <div>r/{communityName.substring(3)}</div>
              <p>{abbreviate(membersCount, 1)} Members</p>
            </div>
          </div>
          <div className="button">
            <button
              onClick={clickHandler}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={MouseLeaveHandler}
              className="join"
            >
              {btnContent}
            </button>
          </div>
        </div>
      </Link>
    </ContainerAlibash>
  );
};

export default CommunityCardItem;
