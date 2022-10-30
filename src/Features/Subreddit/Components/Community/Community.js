import React, { useState } from "react";

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
} from "./CommunitySyle";

/**
 * Component that contains the header of the community leaderboard page
 *
 * @Component
 * @param {Object} props - Community Data
 * @param {boolean} props.isJoined - Boolean showing whether the user joined that community or not
 * @param {string} props.img - Subreddit Image
 * @param {string} props.title - Subreddit Title
 * @param {string} props.description - Subreddit Description to show in hover box
 * @param {number} props.index - Subreddit index among fetched data to index the list
 * @param {object} props.stats - Object containing Subreddit Stats (online, and members)
 * @param {number} props.stats.members - Subreddit Member count
 * @param {number} props.stats.online - Subreddit online members count
 * @param {number} props.rankChange - Subreddit Rank Change
 * @returns {React.Component}
 */
export default function Community(props) {
  const [isJoined, setIsJoined] = useState(props.isJoined);

  function changeButton() {
    setIsJoined((prevJoined) => !prevJoined);
  }
  const isRising = props.isJoined;
  return (
    <CommunityItem>
      <CommunityA href={`/${props.title}`}>
        <CommunityIndex>{props.index}</CommunityIndex>
        <Arrow up={isRising}></Arrow>
        <CommunityImg
          src={require(`../../Assets/images/${props.img}`)}
          alt="logo"
        ></CommunityImg>
        <TitleParagraph>{props.title}</TitleParagraph>
        <CommunityCard>
          <ForPadding>
            <HoverItem>
              <ImgTitle>
                <HoverImg src={require(`../../Assets/images/${props.img}`)} />
                <HoverTitle>{props.title}</HoverTitle>
              </ImgTitle>
              <MembersOnline>
                <Members>
                  <HoverH4>{props.stats.members}</HoverH4>
                  <HoverP>Members</HoverP>
                </Members>
                <Online>
                  <HoverH4>{props.stats.online}</HoverH4>
                  <HoverP>Online</HoverP>
                </Online>
              </MembersOnline>
              <HoverDescription>{props.description}</HoverDescription>
              <HoverButton>View Community</HoverButton>
            </HoverItem>
          </ForPadding>
        </CommunityCard>
      </CommunityA>
      <button
        className={isJoined ? "joined-btn" : "join-btn"}
        onClick={changeButton}
      >
        <span>{isJoined ? "Joined" : "Join"}</span>
      </button>
      <CommunityRankChange>{props.rankChange}</CommunityRankChange>
    </CommunityItem>
  );
}
