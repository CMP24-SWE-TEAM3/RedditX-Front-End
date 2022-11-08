import axios from "API/axios";
import SubRedditBody from "Features/Subreddit/Components/SubRedditBody/SubRedditBody";
import SubRedditHeader from "Features/Subreddit/Components/SubRedditHeader/SubRedditHeader";
import useFetch from "Hooks/useFetch";
import { useState } from "react";
import { InnerContainer, SubRedditContainer } from "./SubReddit.styled";

/**
 * the whole subreddit Component
 *
 * @returns {React.Component} CreatePost component
 */
const SubReddit = () => {
  let [Community, error, loading, reload] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "/api/info?page=4&count=10&limit=50&id='Eln2aa4yn'",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
  console.log(Community);

  const [isJoined, setIsJoined] = useState(false);
  function joinHandler(e) {
    setIsJoined(e);
  }
  const banner = {
    color: "#33a8ff",
    url: "Features/Subreddit/Assets/tree.jpg",
  };

  const info = {
    name: "Eln2aa4yn",
  };

  return (
    <SubRedditContainer>
      <header>Navbar</header>
      <InnerContainer>
        <SubRedditHeader
          banner={banner}
          info={info}
          isJoined={isJoined}
          onJoin={joinHandler}
        />
        <SubRedditBody />
      </InnerContainer>
    </SubRedditContainer>
  );
};

export default SubReddit;
