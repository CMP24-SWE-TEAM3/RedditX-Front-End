import SetSubReddit from "Features/Subreddit/Components/SetSubReddit/SetSubReddit";
import SubRedditBody from "Features/Subreddit/Components/SubRedditBody/SubRedditBody";
import SubRedditHeader from "Features/Subreddit/Components/SubRedditHeader/SubRedditHeader";
import { SubRedditProvider } from "Features/Subreddit/Contexts/SubRedditProvider";
import { useState } from "react";
import { InnerContainer, SubRedditContainer } from "./SubReddit.styled";

/**
 * the whole subreddit Component
 *
 * @returns {React.Component}
 */
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
    name: "Subreddit",
  };

  return (
    <SubRedditProvider>
      <SetSubReddit comName="Community">
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
      </SetSubReddit>
    </SubRedditProvider>
  );
};

export default SubReddit;
