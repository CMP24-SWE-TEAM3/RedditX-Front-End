import { CommunityContainer } from "./TopCommunities.styled";
// import { useState } from "react";
// import logo from "../../Assets/download.jpg";
import { Link } from "react-router-dom";
import CommunityCardItem from "../CommunityCardItem/CommunityCardItem";
const TopCommunities = () => {
  return (
    <CommunityContainer>
      <p className="title">Communities</p>
      <CommunityCardItem />
      <CommunityCardItem />
      <CommunityCardItem />
      <CommunityCardItem />
      <CommunityCardItem />
      <Link to="/communities">
        <p className="more">See more communities</p>
      </Link>
    </CommunityContainer>
  );
};

export default TopCommunities;
