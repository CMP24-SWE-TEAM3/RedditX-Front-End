import React, { useState, useEffect } from "react";
import axios from "API/axios";
import useFetch from "Hooks/useFetch"
import useFetchFunction from "Hooks/useFetchFunction";

import {
  CommunityItem,
  CommunityA,
  CommunityIndex,
  CommunityImg,
  TitleParagraph,
  CommunityCard,
  ForPadding,
  HoverItem,
  ImgTitle,
  HoverImg,
  HoverTitle,
  MembersOnline,
  Members,
  Online,
  HoverDescription,
  HoverH4,
  HoverP,
  HoverButton,
  CommunityRankChange,
  Arrow,
} from "./Community.styled";

/**
 * Component that contains the header of the community leaderboard page
 *
 * @Component
 * @param {boolean} isJoined - Boolean showing whether the user joined that community or not
 * @param {string} img - Subreddit Image
 * @param {string} title - Subreddit Title
 * @param {string} description - Subreddit Description to show in hover box
 * @param {number} index - Subreddit index among fetched data to index the list
 * @param {object} stats - Object containing Subreddit Stats (online, and members)
 * @param {number} stats.members - Subreddit Member count
 * @param {number} stats.online - Subreddit online members count
 * @param {number} rankChange - Subreddit Rank Change
 * @returns {React.Component}
 */
 const Community = ({isJoined, img, title, description, index, stats, rankChange}) => {

  const [isJoinedstate, setIsJoined] = useState(
    isJoined !== undefined ? true : false
  );
  
  const [joinRes, errorJoin, joinLoading, fetchFunction] = useFetchFunction();

  const joinCommunity = () => {
    fetchFunction({
      axiosInstance: axios,
      method: 'POST',
      url: 'http://localhost:8000/Join--Leaderboard',
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
        },
        data: {
          action: isJoinedstate ? "unsub" : "sub",
          sr_name: `${title}`,
        },
      },
    });
  };

  useEffect(() => {
    setIsJoined(isJoined);
  }, [isJoined]); 

  function changeButton() {
    joinCommunity();
    setIsJoined((prevJoined) => !prevJoined);
  }
  const isRising = isJoinedstate;
  return (
    <CommunityItem>
      <CommunityA to={`/subreddit`}>
        <CommunityIndex>{index}</CommunityIndex>
        <Arrow up={isRising? "true": "false"}></Arrow>
        <CommunityImg
          src={require(`../../Assets/images/${img}`)}
          alt="logo"
        ></CommunityImg>
        <TitleParagraph>{title}</TitleParagraph>
        <CommunityCard>
          <ForPadding>
            <HoverItem>
              <ImgTitle>
                <HoverImg src={require(`../../Assets/images/${img}`)} />
                <HoverTitle to={'/subreddit'}>{title}</HoverTitle>
              </ImgTitle>
              <MembersOnline>
                <Members>
                  <HoverH4>{stats.members}</HoverH4>
                  <HoverP>Members</HoverP>
                </Members>
                <Online>
                  <HoverH4>{stats.online}</HoverH4>
                  <HoverP>Online</HoverP>
                </Online>
              </MembersOnline>
              <HoverDescription>{description}</HoverDescription>
              <HoverButton>View Community</HoverButton>
            </HoverItem>
          </ForPadding>
        </CommunityCard>
      </CommunityA>
      <button
        className={isJoinedstate ? "joined-btn" : "join-btn"}
        onClick={changeButton}
      >
        <span>{isJoinedstate ? "Joined" : "Join"}</span>
      </button>
      <CommunityRankChange>{rankChange}</CommunityRankChange>
    </CommunityItem>
  );
};
export default Community;
