import SubRedditBody from "Features/Subreddit/Components/SubRedditBody/SubRedditBody";
import SubRedditHeader from "Features/Subreddit/Components/SubRedditHeader/SubRedditHeader";
import { useState } from "react";
import { InnerContainer, SubRedditContainer } from "./SubReddit.styled";
const SubReddit = () => {
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
