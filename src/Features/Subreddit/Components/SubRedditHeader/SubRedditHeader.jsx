import {
  Banner,
  HeaderContainer,
  HeaderContent,
  HeaderDetails,
  IconAlt,
  Image,
  Info,
} from "./SubRedditHeader.styled";
import Button from "Features/Subreddit/Components/Button/Button";
import { useSubReddit } from "Features/Subreddit/Contexts/SubRedditProvider";
import { useSubRedditID } from "Features/Subreddit/Contexts/SubRedditIDProvider";
import { useEffect } from "react";
import { useState } from "react";
// import { useEffect, useState } from "react";

/**
 *
 * @param {boolean} isJoined - boolean if user joined subreddit
 * @param {function} onJoin - function handler on click join
 * @returns {React.Component}
 */
const SubRedditHeader = ({ isJoined, onJoin }) => {
  const [banner, setBanner] = useState(null);
  const [icon, setIcon] = useState(null);


  /**
   * on click join handler
   *
   * @param {Event} e -event
   */
  function joinHandler(e) {
    onJoin(e);
  }

  const { community } = useSubReddit();
  const { communityID } = useSubRedditID();


  useEffect(() => {
    community && community.banner &&setBanner(community.banner);
    community && community.icon && setIcon(community.icon);
  }, [community]);



  return (
    <HeaderContainer>
      {/* <Banner banner={banner} style = {{background:`url(https://api.redditswe22.tech/subreddits/files/${banner})`}} /> */}
      {banner && (
        <Image
          src={`https://api.redditswe22.tech/subreddits/files/${banner}`}
          alt="banner"
          crossOrigin="anonynmous"
        />
      )}
      { !banner && <Banner banner = {banner} />}
      <HeaderContent>
        <HeaderDetails>
          <div className="content">
            {icon && (
              <img
                src={`https://api.redditswe22.tech/subreddits/files/${icon}`}
                alt="icon"
                crossOrigin="anonynmous"
              />
            )}
            {!icon && <IconAlt>r/</IconAlt>}
            <Info>
              <div className="title-info">
                {/* {community && community.length && community[0].name && <h1 className="title">{community[0].name}</h1>} */}
                {communityID && (
                  <h1 className="title">{communityID.substring(3)}</h1>
                )}
                {/* {community && community.length && community[0].name && <h2 className="subtitle">{`r/${community[0].name}`}</h2>} */}
                {communityID && (
                  <h2 className="subtitle">{`r/${communityID.substring(
                    3
                  )}`}</h2>
                )}
              </div>
              <Button isJoined={isJoined} onJoin={joinHandler} />
            </Info>
          </div>
        </HeaderDetails>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default SubRedditHeader;
