import { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../../Assets/download.jpg";
import { Container } from "./CommunityCardItem.styled";
// Import api
import axios from "API/axios";
import useFetchFunction from "Hooks/useFetchFunction";
/**
 * Component that contains the CommunityCardItem and manage the state of the button join.
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
  return (
    <Container>
      <Link href="#">
        <div className="item">
          <img src={require(`../../Assets/${communityIcon}`)} alt="" />
          <div className="info">
            <div className="info2">
              <h6>r/{communityName}</h6>
              <p>{membersCount}m Members</p>
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
    </Container>
  );
};

export default CommunityCardItem;
