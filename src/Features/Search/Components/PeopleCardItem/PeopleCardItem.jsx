import { Container } from "./PeopleCardItem.styled";
import { useContext, useState } from "react";
// import logo from "../../Assets/download.jpg";
// Import api
import axios from "API/axios";
// import useFetch from "Hooks/useFetch";
import { Link } from "react-router-dom";
import useFetchFunction from "Hooks/useFetchFunction";
import followPeople from "Features/Search/Services/followPeople";
import SafeContext from "Features/Search/Contexts/SafeSearchContext/Safe-context";
import { useEffect } from "react";
import joinCommunity from "Services/joinCommunity.js";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
/**
 * Component that contains the PeopleCardItem and manage the state of the button Follow.
 *
 * @Component
 * @param {String} avatar - The image of the PeopleCardItem
 * @param {String} userID - The ID of the PeopleCardItem
 * @param {String} about - The Description of the PeopleCardItem
 * @param {number} totalKarmas - The totalKarmas of the PeopleCardItem
 * @param {String} username - The name of the PeopleCardItem
 * @returns {React.Component}
 */
const PeopleCardItem = ({
  avatar,
  userID,
  about,
  totalKarmas,
  username,
  isFollow,
}) => {
  const [joinRes, errorJoin, joinLoading, fetchFunction] = useFetchFunction();
  const [isJoinedstate, setisJoined] = useState(false);

  // People Subscriptions

  // find if the user following this one

  // initialState for the following operations
  const initialState = `${isFollow !== undefined ? "Following" : "Follow"}`;
  const auth = useAuth();
  const [joiningResponse, errorJoining, loadingJoining, fetchData] =
    useFetchFunction();
  const handleJoining = (userID, type) => {
    joinCommunity(fetchData, auth, {
      action: !type ? "unsub" : "sub",
      srName: `${userID}`,
    });
  };
  const ctx2 = useContext(SafeContext);
  useEffect(() => {
    if (!loadingJoining) {
      ctx2.RefetchPepHandler(!ctx2.RefetchPep);
    }
  }, [loadingJoining]);
  // the state of the buuton
  const [btnContent, setBtnContent] = useState(
    isFollow !== undefined ? "Following" : "Follow"
  );

  /**
   * it is the function that handle the state of the button when click on it.
   *
   * @param {Object} e it is an object which i can preventDefault and not redirect to the link
   */
  function clickHandler(e) {
    e.preventDefault();
    if (btnContent === "Follow") {
      setBtnContent("Following");
    } else {
      setBtnContent("Follow");
    }
    ///////////////////
    let btnState;
    if (btnContent === "Follow") {
      btnState = true;
    } else {
      btnState = false;
    }
    // let dataObj = {
    //   action: btnState ? "Follow" : "unFollow",
    //   userName: `${username.slice(1)}`,
    // };
    // followPeople(fetchFunction, dataObj);
    ////////////////
    handleJoining(userID, btnState);
  }

  /**
   * it is the function that handle the state of the button when mouseEnter on it.
   *
   */
  function mouseEnterHandler() {
    if (btnContent === "Following") {
      setBtnContent("Unfollow");
    }
  }

  /**
   * it is the function that handle the state of the button when MouseLeave on it.
   *
   */
  function MouseLeaveHandler() {
    if (btnContent === "Unfollow") {
      setBtnContent("Following");
    }
  }
  var abbreviate = require("number-abbreviate");

  console.log(avatar);
  return (
    <Container title="people">
      <Link to={`/user/${userID}`}>
        <div className="item">
          {avatar && (
            <img
              crossOrigin="anonymous"
              src={`https://api.redditswe22.tech/users/files/${avatar}`}
              alt="People Icon"
            />
          )}
          <div className="info">
            <div className="info2">
              <h6>{username.substring(3)}</h6>
              <p>{abbreviate(totalKarmas, 1)} Karma</p>
            </div>
          </div>
          <div className="button">
            <button
              onClick={clickHandler}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={MouseLeaveHandler}
              className="follow"
            >
              {btnContent}
            </button>
          </div>
        </div>
      </Link>
    </Container>
  );
};

export default PeopleCardItem;
