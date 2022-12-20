import React, { useState, useEffect } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import joinCommunity from "Features/Subreddit/Services/joinCommunity";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { BASE_URL } from "API/axios";
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
  HoverDescription,
  HoverH4,
  HoverP,
  HoverButton,
  Arrow,
  HoverDiv,
} from "./Community.styled";
import { useNavigate } from "react-router-dom";

/**
 * Component that contains the community items of the community leaderboard page
 *
 * @Component
 * @param {boolean} isJoined - Boolean showing whether the user joined that community or not
 * @param {string} img - Subreddit Image
 * @param {string} title - Subreddit Title
 * @param {string} description - Subreddit Description to show in hover box
 * @param {number} index - Subreddit index among fetched data to index the list
 * @param {number} members - Subreddit Member count
 * @param {number} rankChange - Subreddit Rank Change
 * @returns {React.Component}
 */
 const Community = ({isJoined, img, title, description, index, members, rankChange}) => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [isJoinedstate, setIsJoined] = useState(
    isJoined !== undefined ? true : false
  );
  
  const [joinRes, errorJoin, joinLoading, fetchFunction] = useFetchFunction();
    
  useEffect(() => {
    setIsJoined(isJoined);
  }, [isJoined]); 

  function changeButton() {
    let dataObject = {
      action: isJoinedstate ? "unsub" : "sub",
      srName: `${title}`
    }
    joinCommunity(fetchFunction, dataObject, auth);
    setIsJoined((prevJoined) => !prevJoined); 
  }
  return (
    
    <CommunityItem>
      <HoverDiv>
        <CommunityA to={`/subreddit/${title}`}>
          <CommunityIndex>{index}</CommunityIndex>
          <Arrow up={rankChange>=0 || !rankChange?"true":"false"}></Arrow>
          <CommunityImg
            crossOrigin="anonynmous"
            src={`${BASE_URL}/subreddits/files/${img}`}
          ></CommunityImg>
          <TitleParagraph>{title.substring(3)}</TitleParagraph>
          
        </CommunityA>
        <CommunityCard className="hover-card">
          <ForPadding>
            <HoverItem>
              <ImgTitle>
                <HoverImg 
                  crossOrigin="anonynmous"
                  src={`${BASE_URL}/subreddits/files/${img}`}/>
                <HoverTitle to={`/subreddit/${title}`}>{title.substring(3)}</HoverTitle>
              </ImgTitle>
              <MembersOnline>
                <Members>
                  <HoverH4>{members}</HoverH4>
                  <HoverP>Members</HoverP>
                </Members>
              </MembersOnline>
              {description && <HoverDescription>{description}</HoverDescription> }
              <HoverButton onClick={()=>navigate(`/subreddit/${title}`)}>View Community</HoverButton>
            </HoverItem>
          </ForPadding>
        </CommunityCard>
        
      </HoverDiv>
      <button
        className={isJoinedstate ? "joined-btn" : "join-btn"}
        onClick={changeButton}
      >
        <span>{isJoinedstate ? "Joined" : "Join"}</span>
      </button>
    </CommunityItem>
  );
};
export default Community;
