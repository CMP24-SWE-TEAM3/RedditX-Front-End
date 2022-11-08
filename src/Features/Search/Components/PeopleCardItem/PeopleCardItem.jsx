import { Container } from "./PeopleCardItem.styled";
import { useState } from "react";
// import logo from "../../Assets/download.jpg";
// Import api
import axios from "API/axios";
// import useFetch from "Hooks/useFetch";
import { Link } from "react-router-dom";
import useFetchFunction from "Hooks/useFetchFunction";
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
const PeopleCardItem = ({ avatar, userID, about, totalKarmas, username }) => {
  ////////////////////////////////////////////////////////
  // Communities Subscriptions
  // let [PeopleSub, errorsub, loadingsub, reloadsub] = useFetch({
  //   axiosInstance: axios,
  //   method: "GET",
  //   url: "/api/me/friendRequests",
  //   requestConfig: {
  //     headers: {
  //       "Content-Language": "en-US",
  //     },
  //   },
  // });
  const [joinRes, errorJoin, joinLoading, fetchFunction] = useFetchFunction();
  const [isJoinedstate, setisJoined] = useState(false);
  const joinCommunity = (btnState) => {
    fetchFunction({
      axiosInstance: axios,
      method: "POST",
      url: "http://localhost:8000/follow",
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
        },
        data: {
          action: btnState ? "Follow" : "unFollow",
          userName: `${username.slice(1)}`,
        },
      },
    });
  };
  // People Subscriptions
  let PeopleSub2 = [
    { id: "1" },
    { id: "2" },
    { id: "t5_imagepro" },
    { id: "t5_imagepro2" },
  ];
  // find if the user following this one
  let IS = PeopleSub2.find(function (element) {
    if (element.id === userID) {
      return true;
    } else {
      return false;
    }
  });
  // initialState for the following operations
  const initialState = `${IS ? "Following" : "Follow"}`;
  ////////////////////////////////////////////////////////
  const [btnContent, setBtnContent] = useState(initialState);

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
    joinCommunity(btnState);
    ////////////////
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
  return (
    <Container>
      <Link to="#">
        <div className="item">
          <img src={avatar} alt="userImage" />
          <div className="info">
            <div className="info2">
              <h6>{username.slice(1)}</h6>
              <p>{totalKarmas}m Members</p>
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
      </Link>
    </Container>
  );
};

export default PeopleCardItem;
