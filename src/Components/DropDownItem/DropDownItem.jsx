import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownContainer, Stars } from "./DropDownItem.styled";
import CustomMenu from "Components/CustomMenu/CustomMenu";
import getCommunities from "Services/getCommunities";
import { useEffect } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import db from "Data/db.json";
import { useNavigate } from "react-router-dom";

/**
 * Component that displays a dropdown item in left-hand side corner of the home page
 * @return {React.Component}
 */
const DropDownItem = ({ dropDownItemRef, setDisplayMenu }) => {
  // authorization
  const auth = useAuth();
  // useFetchFunction
  const [subscribed, errorCommunities, loadingCommunities, fetchCommunities] =
    useFetchFunction();

  // handle fetch joined communities
  useEffect(() => {
    getCommunities(fetchCommunities, auth);
  }, []);

  const navigate = useNavigate();
  return (
    <DropdownContainer as={CustomMenu}>
      <Dropdown.ItemText as={"title"}>your communities</Dropdown.ItemText>
      {subscribed &&
        subscribed.length !== 0 &&
        subscribed.communities.map((community) => {
          return (
            <Dropdown.Item
              key={community._id}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigate(`/subreddit/${community._id}`);
              }}
            >{`r/${community._id.substring(3)}`}</Dropdown.Item>
          );
        })}
      <Dropdown.ItemText as={"title"}>FEEDS</Dropdown.ItemText>
      {db.Feeds.map((feed) => {
        return (
          <Dropdown.Item
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              feed.name === "Home" && navigate("/");
              feed.name === "Popular" && navigate("/popular");
              feed.name === "All" && navigate("/");
            }}
            key={feed.id}
            eventKey={feed.id}
          >
            {feed.name}
          </Dropdown.Item>
        );
      })}

      <Dropdown.ItemText as={"title"}>OTHERS</Dropdown.ItemText>
      {db.OTHERS.map((other) => {
        return (
          <Dropdown.Item
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              other.name === "Messages" && navigate("/message");
              other.name === "User Settings" && navigate("/settings");
              other.name === "Create Post" && navigate("/submit");
              other.name === "Notifications" && navigate("/notifications");
              other.name === "Top Communities" && navigate("/category/*");
            }}
            key={other.id}
            eventKey={other.id}
          >
            {other.name}
          </Dropdown.Item>
        );
      })}
    </DropdownContainer>
  );
};
export default DropDownItem;

//TODO: add ico to dropdown items
//<span><AiFillHome size={21}/></span>
//import {AiFillHome} from "react-icons/ai";
// <Stars><CiStar size={25}/></Stars>
//import {CiStar} from "react-icons/ci";
