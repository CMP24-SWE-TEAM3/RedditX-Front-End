import { useState } from "react";
import {
  BtnContainer,
  Button,
  PeopleDescription,
  PeopleInfo,
  PeopleMainInfo,
  PeopleKarma,
  PeopleTitle,
  Container,
  Flex,
  Img,
} from "./PeopleItem.styled.js";
// Import api
import axios from "API/axios";
import useFetch from "Hooks/useFetch";
import PeopleImage from "../../Assets/People_Image.jpg";
import useFetchFunction from "Hooks/useFetchFunction.js";
/**
 * Component that contains the PeopleItem and manage the state of the button Follow.
 *
 * @Component
 * @param {String} avatar - The image of the PeopleCardItem
 * @param {String} userID - The ID of the PeopleCardItem
 * @param {String} about - The Description of the PeopleCardItem
 * @param {number} totalKarmas - The totalKarmas of the PeopleCardItem
 * @param {String} username - The name of the PeopleCardItem
 * @returns {React.Component}
 */
const PeopleItem = ({ avatar, userID, about, totalKarmas, username }) => {
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
  // people Subscriptions

  let PeopleSub2 = [
    { id: "1" },
    { id: "2" },
    { id: "t5_imagepro" },
    { id: "t5_imagepro2" },
  ];
  // // is the user subscriber to this one
  let IS = PeopleSub2.find(function (element) {
    if (element.id === userID) {
      return true;
    } else {
      return false;
    }
  });
  // the initialState of the following operations
  const initialState = `${IS ? "Following" : "Follow"}`;
  ////////////////////////////////////////////////////////
  // the state of the following button
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
    <Container href="#">
      <Flex>
        <Img src={require(`../../Assets/${avatar}`)} alt="People Icon" />
        <PeopleInfo>
          <PeopleMainInfo>
            <PeopleTitle>{username.slice(1)}</PeopleTitle>
            <PeopleKarma>
              <span>•</span>
              {totalKarmas}k Karma
            </PeopleKarma>
          </PeopleMainInfo>
          <PeopleDescription>{about}</PeopleDescription>
        </PeopleInfo>
        <BtnContainer>
          <Button
            onClick={clickHandler}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={MouseLeaveHandler}
          >
            {btnContent}
          </Button>
        </BtnContainer>
      </Flex>
    </Container>
  );
};

export default PeopleItem;
