import axios from "API/axios";
import useFetch from "Hooks/useFetch";
import {
  Banner,
  HeaderContainer,
  HeaderContent,
  HeaderDetails,
  Info,
} from "./SubRedditHeader.styled";

import profile from "Features/Subreddit/Assets/index.jpeg";
import Button from "Features/Subreddit/Components/Button/Button";

/**
 *
 * @param {string} banner - picture or color of header banner
 * @param {object} info - object contain info of subreddit
 * @param {boolean} isJoined - boolean if user joined subreddit
 * @param {function} onJoin - function handler on click join
 * @returns {React.Component} CreatePost component
 */
const SubRedditHeader = ({ banner, info, isJoined, onJoin }) => {
  /**
   * on click join handler
   *
   * @param {Event} e -event
   */
  function joinHandler(e) {
    onJoin(e);
  }

  let [replay, error, loading, reload] = useFetch({
    axiosInstance: axios,
    method: "POST",
    url: "/api/subscribe",
    requestConfig: {
      data: {
        action: `${isJoined ? "sub" : "unsub"}`,
        sr_name: `${info.name}`,
      },
      // headers: {
      //   "Content-Language": "en-US",
      // },
    },
  });
  console.log(replay);

  return (
    <HeaderContainer>
      <Banner banner={banner} />
      <HeaderContent>
        <HeaderDetails>
          <div className="content">
            <img src={profile} alt="" />
            <Info>
              <div className="title-info">
                <h1 className="title">{info.name}</h1>
                <h2 className="subtitle">{`r/${info.name}`}</h2>
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
